'use strict';

/**
 * @ngdoc function
 * @name labNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the labNgApp
 */
angular.module('labNgApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
