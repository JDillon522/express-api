// Configure the app and global middleware
require('dotenv').config(); // Loads a .env file. Only for Dev
const express = require('express');
const helmet = require('helmet');

const app = express();

// app.use(express.static('stub'));
app.use(helmet());

app.use((req, res, next) => {
    console.log('Root middleware');

    next();
});

module.exports = app;