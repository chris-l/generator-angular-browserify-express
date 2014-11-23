/*jslint node: true, indent: 2, nomen:true, stupid:true */
'use strict';
var di, angular, app, uiModules, injector;

di = require('di');
angular = require('angular');
require('angular-resource');
require('angular-route');
require('bootstrap');
<% if (includeAngularBootstrap) { %>require('angular-bootstrap');<% } %>

app = angular.module('<%= _.slugify(appname) %>', [
  'ngRoute',
  <% if (includeAngularBootstrap) { %>'ui.bootstrap',<% } %>
  'ngResource'
]);
app.config(function ($routeProvider) {
  $routeProvider.otherwise({ redirectTo : '/view1' });
});

uiModules = {
  angular   : [ 'value', angular ],
  app       : [ 'value', app ]
};
uiModules.uiModules = [ 'value', uiModules ];

injector = new di.Injector([uiModules]);

/* modules browserify */
