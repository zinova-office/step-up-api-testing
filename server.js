// app.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const messageRoutes = require('./routes/messageRoutes');

const app = express();
const PORT = process.env.PORT || 3020;

app.use(express.json());
app.use('/api', messageRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
