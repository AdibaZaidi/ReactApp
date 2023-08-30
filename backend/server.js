const express = require('express');
const cors = require('cors');
const data = require('./data/jsondata.json'); // Assuming jsondata.json is in a 'data' directory

const app = express();
app.use(cors());

// Your other middleware and routes

app.get('/api/data', (req, res) => {
  res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
