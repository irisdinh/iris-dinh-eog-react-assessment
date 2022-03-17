import React from 'react';
import {
  useQuery,
  gql,
} from '@apollo/client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import './graph.css';

const GraphDisplay = ({ metricName }) => {
  const heartQuery = gql`
  query ($metricName: String!) {
    getLastKnownMeasurement(metricName: $metricName) {
      metric
      at
      value
      unit
    }
  }
  `;

  const { loading, error, data } = useQuery<any>(heartQuery, {
    variables: {
      metricName,
    },
  });
  return (!loading || error) ? (
    <Card className='unitCard'>
      <CardContent>
        <div>
          <h2>{data?.getLastKnownMeasurement.metric}</h2>
          <p>{data?.getLastKnownMeasurement.value} {data?.getLastKnownMeasurement.unit}</p>
        </div>
      </CardContent>
    </Card>
  ) : <CircularProgress />;
};

export default GraphDisplay;
