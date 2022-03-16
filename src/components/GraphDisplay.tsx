import React from 'react';
import { useSelector } from 'react-redux';
import LineChartDisplay from './LineChart';
import UnitCard from './UnitCard';

const GraphDisplay = () => {
  const chosenMetric = useSelector((state: any) => state.searchItem);

  return (
    <div>
      <div>
        {chosenMetric.map((value: any) => (
          <UnitCard metricName={value} />
        ))}
      </div>
      <LineChartDisplay />
    </div>

  );
};

export default GraphDisplay;
