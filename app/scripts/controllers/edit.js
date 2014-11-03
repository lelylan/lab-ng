'use strict';

/**
 * @ngdoc function
 * @name lelylan-lab.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the lelylan-lab
 */
angular.module('lelylan-lab')
  .controller('EditCtrl', function ($scope, $rootScope, $routeParams, $location, Project) {
    $rootScope.page = 'yours';

    Project.find($routeParams.id).
      success(function(data) {
        $scope.project = data;
    });

    $scope.update = function(project) {
      if (!$scope.sending || !$scope.form.$invalid) {
        $scope.sending = true

        Project.update($routeParams.id, project).
          success(function(data) {
            $location.path('/show/' + data.id);
            $scope.sending = false;
          }).
          error(function(){
            $scope.errors = "You need to complete the required fields"
            $scope.sending = false;
          })
      }
    }
  });
