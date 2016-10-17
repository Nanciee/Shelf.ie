var express = require('express');

var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

app.listen(8080);
console.log('Listening on port 8080!')

module.exports = app;