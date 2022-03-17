import React from 'react';
import { useSelector } from 'react-redux';
// import {
//   useQuery,
//   gql,
// } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import LineChartDisplay from './LineChart';
import UnitCard from './UnitCard';
import './graph.css';

const GraphDisplay = () => {
  const chosenMetric = useSelector((state: any) => state.searchItem);

  return (
    <div>
      <div className="cardDisplay">
        {chosenMetric !== [] && chosenMetric.map((value: any) => (
          <UnitCard key={value} metricName={value} />
        ))}
      </div>
      {chosenMetric[0] && <LineChartDisplay />}
    </div>
  );
};

export default GraphDisplay;
