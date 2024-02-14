import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TemperatureChart = ({ data }) => {
  const [chartDimensions, setChartDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setChartDimensions({
        width: window.innerWidth * 0.9,
        height: window.innerHeight * 0.4,
      });
    };

    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  const chartData = data.hourly.time.map((time, index) => ({
    time: new Date(time),
    temperature: data.hourly.temperature_2m[index],
  }));

  const firstDate = chartData[0]["time"]
  const lastDate = chartData[chartData.length - 1]["time"]

  const formatDate = (date) => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    return `${monthNames[monthIndex]} ${day.toString().padStart(2, "0")} ${year}`;
  };

  return (
    <div className='tempChart'>
      <h2>Temperature Chart</h2>
      <div className='tempChartWrapper'>
        <LineChart 
          width={chartDimensions.width}
          height={chartDimensions.height} 
          data={chartData}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" label={{ value: `${formatDate(firstDate)} - ${formatDate(lastDate)}`, position: 'insideBottom'}} tick={false} />
          <YAxis label={{ value: 'Temp (°C)', angle: -90, position: 'insideLeft' }} />
          <Tooltip position="top" />
          <Legend position="top" />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" dot={false} />
        </LineChart>
      </div>
    </div>
  );
};

export default TemperatureChart;
