import React from 'react';
import { useSelector } from 'react-redux';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
} from 'recharts';
import {
  useQuery,
  gql,
} from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorMessage from './ErrorMessage';
import './graph.css';

const query = gql`
  query ($input: MeasurementQuery!) {
    getMeasurements(input: $input) {
      metric
      at
      value
      unit
    }
  }
`;

const LineChartDisplay = () => {
  const chosenMetric = useSelector((state: any) => state.searchItem);

  const input = {
    metricName: chosenMetric[0],
  };

  const { loading, error, data } = useQuery<any>(query, {
    variables: {
      input,
    },
  });

  const convertData = data?.getMeasurements.map((value: any) => ({
    uv: value.value,
  }));

  if (loading && !data) {
    return (
      <CircularProgress className='spinner' size="10rem" />
    );
  }
  return !error ? (
    <LineChart width={1500} height={800} data={convertData}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <XAxis />
      <YAxis />
    </LineChart>
  ) : <ErrorMessage />;
};

export default LineChartDisplay;
