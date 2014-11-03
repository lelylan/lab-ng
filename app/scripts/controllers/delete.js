'use strict';

/**
 * @ngdoc function
 * @name lelylan-lab.controller:DeleteCtrl
 * @description
 * # DeleteCtrl
 * Controller of the lelylan-lab
 */
angular.module('lelylan-lab')
  .controller('DeleteCtrl', function ($scope, $rootScope, $routeParams, $location, Project) {
    $rootScope.page = 'yours';

    Project.find($routeParams.id).
      success(function(data) {
        $scope.project = data;
    });

    $scope.delete = function() {
      Project.delete($routeParams.id).
        success(function(data) {
          $location.path('/yours');
      });
    }
  });
