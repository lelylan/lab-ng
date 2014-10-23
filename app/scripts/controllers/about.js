'use strict';

/**
 * @ngdoc function
 * @name labNgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the labNgApp
 */
angular.module('labNgApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
