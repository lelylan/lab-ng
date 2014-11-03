'use strict';

/**
 * @ngdoc function
 * @name lelylan-lab.controller:ShowCtrl
 * @description
 * # ShowCtrl
 * Controller of the lelylan-lab
 */
angular.module('lelylan-lab')
  .controller('ShowCtrl', function ($scope, $rootScope, $routeParams, $location, Project) {
    $rootScope.page = 'yours';

    Project.find($routeParams.id).
      success(function(data) {
        $scope.project = data;
    });
  });
