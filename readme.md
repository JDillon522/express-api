## Express API Fiddling

To run:
```
npm install
// If you dont have nodemon already
npm install -g nodemon
npm run dev
```

Current Layout:

`app.js` configures the gloabl app middleware and defaults.

`router.js` combines all the routes and their respective middleware

`server.js` starts the server up.

`./routes` contains a .js file for each route.