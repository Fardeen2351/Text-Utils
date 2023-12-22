import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';

const Chart = ({ data }) => {
  const validData = data.filter((item) => !isNaN(item.finaldata));

  if (!validData || validData.length === 0) {
    return <div>No data available for chart</div>;
  }

  const xAxisData = validData.map((item) => item.subdata);
  const lineData = validData.map((item) => item.finaldata);

  return (
    <>
    <BarChart
    xAxis={[
        {
            id: 'barCategories',
            data: xAxisData,
            scaleType: 'band',
            
        },
    ]}
    series={[
        {
            data: lineData,
            color: 'lightpink',
        },
    ]}
    width={1000}
    height={500}
    />
  <LineChart
  xAxis={[{ data:lineData}]}
  series={[
    {
      data: lineData,
      color:'red',
    },
]}
width={500}
height={300}
/>
</>
);
};
  


export default Chart;
