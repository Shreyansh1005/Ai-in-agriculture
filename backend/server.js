const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const cropRoutes = require('./routes/cropRoutes');

dotenv.config();
connectDB();

const app = express();

// app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/crops', require('./routes/cropRoutes'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
