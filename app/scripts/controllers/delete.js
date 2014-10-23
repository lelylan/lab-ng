'use strict';

/**
 * @ngdoc function
 * @name lelylan-lab.controller:DeleteCtrl
 * @description
 * # DeleteCtrl
 * Controller of the lelylan-lab
 */
angular.module('lelylan-lab')
  .controller('DeleteCtrl', function ($scope, $rootScope, $routeParams) {
    $rootScope.page = 'yours';
    $scope.id = $routeParams.id;
  });
