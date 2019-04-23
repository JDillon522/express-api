## Express API Fiddling

### Basic
```bash
npm install
// If you dont have nodemon already
npm install -g nodemon
npm run dev
```

### HTTPS
Generate a dev only self-signed cert with:
- `openssl req -nodes -new -x509 -keyout server.key -out server.cert`
- Create a `.env` file and set `HTTPS=true`.

### VS Code
If you use VS Code you can use the built in debugger and run the DEV Task. You'll need to manually restart the server when you make changes vs letting nodemon do it for you. (I'm too lazy to attach nodemon to VS Code debugger. Its weird.)


### Current Layout
- `app.js` configures the gloabl app middleware and defaults.
- `router.js` combines all the routes and their respective middleware
- `server.js` starts the server up.
- `./routes` contains a .js file for each route.