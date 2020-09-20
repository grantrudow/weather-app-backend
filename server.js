const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const PORT = 4000;

const weatherApi ='ed8879c76ac5097000f1c6a9159c4e7f';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const days = [
    'Mon',
    'Tue',
    'Wed',
    'Thurs',
    'Fri',
    'Sat',
    'Sun'
  ]

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('HEYO')
})

app.get('/getweather', (req, res) => {
    let request = req.body;

    res.send('This is weather time')
})

app.listen(PORT, () => {
    console.log('YEAH BOI WE OUT HERE')
})