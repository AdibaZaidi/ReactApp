import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Prepare chart data based on fetched 'data'
  const chartData = {
    labels: data.map(item => item.Country),
    datasets: [
      {
        label: 'Intensity',
        data: data.map(item => item.Intensity),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="App">
      <Bar data={chartData} options={{ maintainAspectRatio: false }} />
    </div>
  );
}

export default App;
