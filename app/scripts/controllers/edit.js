'use strict';

/**
 * @ngdoc function
 * @name lelylan-lab.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the lelylan-lab
 */
angular.module('lelylan-lab')
  .controller('EditCtrl', function ($scope, $rootScope, $routeParams) {
    $rootScope.page = 'yours';
    $scope.id = $routeParams.id;
  });
