'use strict';

/**
 * @ngdoc function
 * @name lelylan-lab.controller:YoursCtrl
 * @description
 * # YoursCtrl
 * Controller of the lelylan-lab
 */
angular.module('lelylan-lab')
  .controller('YoursCtrl', function ($scope, $rootScope, Project) {
    $rootScope.page = 'yours'

    Project.all().
      success(function(data) {
        $scope.projects = data;
      });
  });
