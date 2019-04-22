const index = require('express').Router();

index.use((req, res, next) => {
    console.log('INDEX MiddleWare', req.path);

    next();
});

index.get('/', (req, res, next) => {
    console.log('INDEX /');

    res.statusCode = 200;
    res.send({ index: 'hello' });
});

module.exports = index;