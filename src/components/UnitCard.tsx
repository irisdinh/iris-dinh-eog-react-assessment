import React from 'react';
import {
  useQuery,
  gql,
} from '@apollo/client';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';

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
  console.log(data);
  console.log(loading, error);

  return (
    <Card>
      <CardHeader>
        {data.getLastKnownMeasurement.metric}
      </CardHeader>
      <CardContent>
        {data.getLastKnownMeasurement.value} {data.getLastKnownMeasurement.unit}
      </CardContent>
    </Card>
  );
};

export default GraphDisplay;
