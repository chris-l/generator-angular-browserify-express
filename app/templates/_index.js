/* jslint node: true */
'use strict';

var express       = require('express'),
    sections      = require('./sections'),
    http          = require('http'),
    browserify    = require('browserify-middleware'),
    shim          = require('browserify-shim'),
    <% if (includeLess) { %>expressLess   = require('express-less'),<% } %>
    transformify  = require('transformify'),
    path          = require('path');


/**
  * Create server
  */
var app = express();

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 4000);
app.set('views', __dirname + '/sections');
app.set('view engine', 'jade');
app.use(express.bodyParser());
app.use(express.methodOverride());
<% if (includeLess) { %>app.use('/css', expressLess(__dirname + '/sections/_default/less'));<% } %>
app.use(express.static(path.join(__dirname, 'static')));
app.use('/vendor', express.static(__dirname + '/bower_components'));
app.use(app.router);

/**
 * Routes
 */

// Add the routes from the sections
sections(app);

// Browserify the requires routes
var addRequires = transformify(function (x) {
  return x.replace('/* modules browserify */', require('./sections/_default/browser-requires.js')());
});
app.get('/js/app.js', browserify('./sections/_default/angular-app.js', { transform  : [ addRequires, shim ], minify : { mangle : false } }));

// serve index and view partials
app.get('/', function (req, res) {
  res.render('_default/index');
});
app.get(/\/html\/([\w\/]+)\.html/, function (req, res) {
  var name = req.params[0];
  res.render(name);
});
/*

 * Start Server
 */

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express app listening on port ' + app.get('port'));
});

