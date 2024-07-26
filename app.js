const express = require('express');
const app = express();
const path = require('path');
const vehicleData = require('./data/vehicle-data.json');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/api/vehicle-data', (req, res) => {
  res.json(vehicleData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
