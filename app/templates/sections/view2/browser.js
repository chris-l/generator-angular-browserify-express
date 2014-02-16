/* jslint node: true */
'use strict';

function ctrl($scope, $http) {
}

module.exports = function (angular_app) {
  angular_app.config(function ($routeProvider) {
    $routeProvider.when('/view2', {controller : ctrl, templateUrl : '/html/view2/view.html'});
  });
};
