## Express API Fiddling

To run basic:
```
npm install
// If you dont have nodemon already
npm install -g nodemon
npm run dev
```

To run with HTTPS:

Generate a dev only self-signed cert with:
- `openssl req -nodes -new -x509 -keyout server.key -out server.cert`
- Create a `.env` file and set `HTTPS=true`.


Current Layout:

- `app.js` configures the gloabl app middleware and defaults.
- `router.js` combines all the routes and their respective middleware
- `server.js` starts the server up.
- `./routes` contains a .js file for each route.