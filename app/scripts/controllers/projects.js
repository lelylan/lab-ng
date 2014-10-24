'use strict';

/**
 * @ngdoc function
 * @name lelylan-lab.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the lelylan-lab
 */
angular.module('lelylan-lab')
  .controller('ProjectsCtrl', function ($scope, $rootScope, $routeParams, Project) {
    $rootScope.page = 'projects';
    $scope.params = {}
    $scope.params.tag = $routeParams.category;
    console.log($scope.params);

    Project.all($scope.params).
      success(function(data) {
        $scope.projects = data;
      });
  });
