var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/store-front');

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(8080);
console.log('Listening on port 8080!')

module.exports = app;