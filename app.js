var express = require('express');
var app = new express();
var mongoose =  require('mongoose');
var config = require('./config');
var setupController = require('./Controllers/setupController');
var apiController = require('./Controllers/apiController');

var port = process.env.PORT || 3000 ;

app.use('/assets',express.static(__dirname +
     '/public'));

app.set('view engine','ejs');

mongoose.connect(config.getDbConnectionString());
 

setupController(app);
apiController(app);

app.listen(port);