import './App.css';
import { useState } from 'react';
import Navbar from './NavBar';
import Forecast from './Forecast';

function App() {
  const [temperatureData, setTemperatureData] = useState(null);

  const fetchTemperatureData = async (formData) => {
    try {
      const response = await fetch('http://localhost:3001/api/receive_data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
      if (!response.ok) {
        throw new Error('Failed to fetch temperature data');
      }
      const data = await response.json();
      setTemperatureData(data);
    } catch (error) {
      console.error('Error fetching temperature data:', error);
    }
  };

  const handleFormSubmit = async (formData) => {
    await fetchTemperatureData(formData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar onFormSubmit={handleFormSubmit} />
      </header>
      <div>
        {temperatureData ? (
          <Forecast data={temperatureData} />
        ) : (
          <p>Please select a City and a date range</p>
        )}
      </div>
    </div>
  );
};

export default App;
