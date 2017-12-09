// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const SignalRJs = require('signalrjs');
const cors = require('cors');

// Get our API routes
const api = require('./routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(cors({ credentials: true, origin: 'http://localhost:4200' }));

// Point static path to dist
// app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Signalr
var signalR = SignalRJs();
signalR.hub('BiddingHub', {
    CONNECTED: () => {
        console.log("COMES TO hub CONNECTED");
        // console.log(signalR.hub('BiddingHub'));
        // this.clients.all.invoke('onEvent', { eventName: 'sometest' });
    }
});

app.use(signalR.createListener());


signalR.on('CONNECTED', () => {
    // signalR.hubs()
    // signalR.broadcast("You are now connected");
    // signalR.broadcast({ time: new Date() });
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
