const express = require('express');
const path = require('path');
const db = require('./config/connection');
const { authMiddleWare } = require('./utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));


db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`🚀 API server running on port ${PORT}!`);
      console.log('MongoDB Connected');
    });
  });