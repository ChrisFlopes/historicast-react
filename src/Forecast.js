import TemperatureChart from './TemperatureChart';

const Forecast = ({ data }) => {
  return (
    <div className="forecast">
      <TemperatureChart data={data} />
    </div>
  );
};

export default Forecast;
