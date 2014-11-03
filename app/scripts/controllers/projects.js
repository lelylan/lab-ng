'use strict';

/**
 * @ngdoc function
 * @name lelylan-lab.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the lelylan-lab
 */
angular.module('lelylan-lab')
  .controller('ProjectsCtrl', function ($scope, $rootScope, $routeParams, Project, ENV) {
    $rootScope.page = 'projects';

    $rootScope.params = {}
    if ($routeParams.category && $routeParams.category!='all')
      $rootScope.params.tag = $routeParams.category;

    Project.public($rootScope.params).
      success(function(data) {
        $scope.projects = data;
      });

  });
