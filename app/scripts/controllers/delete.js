'use strict';

/**
 * @ngdoc function
 * @name labNgApp.controller:DeleteCtrl
 * @description
 * # DeleteCtrl
 * Controller of the labNgApp
 */
angular.module('labNgApp')
  .controller('DeleteCtrl', function ($scope, $rootScope, $routeParams) {
    $rootScope.page = 'yours';
    $scope.id = $routeParams.id;
  });
