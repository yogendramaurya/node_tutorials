const express = require('express');
const bodyParser = require('body-parser');
cont mongoose = require('mongoose');
const feedRoutes = require('./routers/feed');
const app = express();
//app.use(bodyParser.urlencoded);
app.use(bodyParser.json());
app.use('/feed', feedRoutes);
app.listen(3000);


mongoose
    .connect()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => console.log(err));