import { useState } from "react";

const Navbarsearch = ({ onFormSubmit }) => {
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      city,
      startDate,
      endDate
    };

    onFormSubmit(data);
  }
  return (
    <div className="navbarsearch">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="city">City</label>
          <input 
            type="text"
            id="city"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="start-date">Start Date:</label>
          <input
            type="date"
            id="start-date"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            min="1940-01-01"
            max={new Date().toISOString().split('T')[0]}
            required
          />
        </div>
        <div>
          <label htmlFor="end-date">End Date:</label>
          <input
            type="date"
            id="end-date"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            min="1940-01-01"
            max={new Date().toISOString().split('T')[0]}
            required
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </div> 
  );
}
 
export default Navbarsearch;