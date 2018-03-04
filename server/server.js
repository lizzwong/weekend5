const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('server/public'));

//mongoose
const mongoose = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/favorites';

mongoose.connection.on('connected', function () {
    console.log('mongoose conntected to:', databaseUrl);
})

mongoose.connection.on('error', function (error) {
    console.log('mongoose connection error', error);

})

mongoose.connect(databaseUrl);

//end mongoose setup

//router
const favoritesRouter = require('./routers/favoritesRouter');
app.use('/favorites', favoritesRouter);

//server
let port = process.env.PORT || 5000;

app.listen(port, function(){
    console.log('listening on port:', port);
    
})