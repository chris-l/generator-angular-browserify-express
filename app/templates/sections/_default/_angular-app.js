/* jslint node: true */
/*global angular*/
'use strict';

var app = angular.module('<%= _.slugify(appname) %>', [ 'ngRoute'<% if (includeAngularBootstrap) { %>, 'ui.bootstrap' <% } %>]);
app.config(function ($routeProvider) {
  $routeProvider.otherwise({redirectTo : '/view1'});
});

/* modules browserify */
