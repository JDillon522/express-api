// Configure the app and global middleware
const express = require('express');
const app = express();

// app.use(express.static('stub'));

app.use((req, res, next) => {
    console.log('Root middleware');


    next();
});

module.exports = app;