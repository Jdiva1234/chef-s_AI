const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello from our server!');
});

app.listen(8080, () => {
  console.log('server listening on port 8080');
});

// Define a route handler for GET requests to the '/food-image' path
app.get('/food-image', async (req, res) => {
  try {
    // Make a request to the Foodish API
    const response = await fetch('https://foodish-api.com/api/');
    // Parse the response as JSON
    const data = await response.json();
    // Send the data back to the client
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching image from Foodish API' });
  }
});
