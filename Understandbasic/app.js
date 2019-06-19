// Lets create a server
// code module - http, https, fs, path,os

// http  -> launch a server, send requests

const http = require('http');  // auto add .js

const server = http.createServer((req, res) => {
    const url = req.url;

    if(url === '/'){
        res.write("fcuk u");
        res.end();
    }

    res.write("sadfsafdafs");
    res.end();
});

server.listen(3000);

// https -> launch ssl server , send requests