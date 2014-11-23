/*jslint node: true, indent: 2, nomen:true */
'use strict';

function someCtrl($scope, $http) {
  $scope.send = function () {
    $http({
      data    : $scope.ask,
      method  : 'POST',
      url     : '/view1/api'
    }).success(function () {
      return;
    });
  };
}

module.exports = function (app) {
  app.config(function ($routeProvider) {
    $routeProvider.when('/view1', { controller : someCtrl, templateUrl : '/html/view1/partial1.html' });
  });
};
