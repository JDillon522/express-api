const about = require('express').Router();

about.use((req, res, next) => {
    console.log('ABOUT MIDDLEWARE');

    next();
});

about.get('/', (req, res, next) => {
    console.log('ABOUT');
    res.statusCode = 200;
    res.send({ about: 'ABOUT PAGE'});
});

about.get('/stub', (req, res, next) => {
    res.statusCode = 200;
    res.json(require('../stub/stub.json'));
});

module.exports = about;