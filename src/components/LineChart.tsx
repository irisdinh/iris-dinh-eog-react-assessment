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

// type MeasurementQuery = {
//   metricName: String
//   after: number
//   before: number
// };

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
  chosenMetric.forEach((value: any) => {
    console.log(value);
  });
  const input = {
    metricName: 'waterTemp',
  };

  const { loading, error, data } = useQuery<any>(query, {
    variables: {
      input,
    },
  });

  console.log(loading, error);
  const convertData = data?.getMeasurements.map((value: any) => ({
    uv: value.value,
    pv: value.at,
    amt: value.at,
  }));

  // const graphdata = [
  //   {
  //     name: 'Page A',
  //     uv: 400,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: 'Page B',
  //     uv: 400,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  // ];

  return data ? (
    <LineChart width={1000} height={800} data={convertData}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <XAxis dataKey="time" />
      <YAxis dataKey="F" />
    </LineChart>
  ) : <div />;
};

export default LineChartDisplay;
