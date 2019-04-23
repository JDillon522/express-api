const http = require('http');
const https = require('https');
const fs = require('fs');
const app = require('./router');

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

if (process.env.HTTPS) {
    https.createServer({
        key: fs.readFileSync('server.key'),
        cert: fs.readFileSync('server.cert')
    }, app).listen(port, host, () => {
        console.log(`Listening securely in ${process.env.ENVIRONMENT} mode on https://${host}:${port}`);
    });
} else {
    http.createServer(app).listen(port, host, () => {
        console.log(`Listening unsecure in ${process.env.ENVIRONMENT} mode on http://${host}:${port}`);
    });
}

