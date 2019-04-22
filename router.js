const app = require('./app');

const index = require('./routes/index');
const about = require('./routes/about');

app.use('/', index);
app.use('/about', about)

app.use('*', (req, res, next) => {
    res.statusCode = 404;
    res.send('NOT FOUND');
})

module.exports = app;