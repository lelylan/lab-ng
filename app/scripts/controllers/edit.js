'use strict';

/**
 * @ngdoc function
 * @name labNgApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the labNgApp
 */
angular.module('labNgApp')
  .controller('EditCtrl', function ($scope, $rootScope, $routeParams) {
    $rootScope.page = 'yours';
    $scope.id = $routeParams.id;
  });
