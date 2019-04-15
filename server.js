var express = require('express')
var app = express();
var bodyParser = require('body-parser');

const mongoose = require('mongoose');

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/notes', {useNewUrlParser: true});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log("Database Connection Established");
})

require('./routes/userRoutes')(app);

 
app.listen(3000)