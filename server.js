const app = require('./router');

const port = process.env.PORT || 3000;

app.listen(port, 'localhost', () => {
    console.log(`Listening on Port: ${port} in ${process.env.ENVIRONMENT} mode`);

});