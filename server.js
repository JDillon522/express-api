const app = require('./router');

const port = 3000;

app.listen(port, 'localhost', () => {
    console.log('LISTENING');

});