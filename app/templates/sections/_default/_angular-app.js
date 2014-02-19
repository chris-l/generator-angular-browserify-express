/* jslint node: true */
/*global angular*/
'use strict';
var di = require('di');

var app = angular.module('<%= _.slugify(appname) %>', [ 'ngRoute'<% if (includeAngularBootstrap) { %>, 'ui.bootstrap' <% } %>]);
app.config(function ($routeProvider) {
  $routeProvider.otherwise({redirectTo : '/view1'});
});

var uiModules = {
  angular   : [ 'value', angular ],
  app       : [ 'value', app ]
};
uiModules.uiModules = [ 'value', uiModules ];

var injector = new di.Injector([uiModules]);

/* modules browserify */
