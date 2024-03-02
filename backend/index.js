const express = require('express');
const colors = require('colors');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./config/db'); // Import your MySQL db connection setup
const port = process.env.PORT || 5000;

dotenv.config();

const app = express();


const corsOptions = {
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET', 'PUT', 'DELETE'],
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/hotels', require('./routes/hotelRoutes'));


app.get('/', (req, res) => res.send('Hotel Api'));
// No need to call db.connect(); anymore

app.listen(port, () => console.log(`Server started on port ${port}`));
