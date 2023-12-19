// index.js
const express = require('express');
const bodyParser = require('body-parser'); 
const router = require('./Routes/authRoutes');
const connectDB = require('./Config/db');
const cors = require('cors');
const app = express();
app.use(cors()); 
const PORT = process.env.PORT || 8080;

// MongoDB Connection
connectDB();

app.use(bodyParser.json());

// Routes
app.use('/auth', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
