'use strict';

/**
 * @ngdoc function
 * @name lelylan-lab.controller:CreateCtrl
 * @description
 * # CreateCtrl
 * Controller of the lelylan-lab
 */

angular.module('lelylan-lab')
  .controller('CreateCtrl', function ($scope, $rootScope, $location, Project) {
    $rootScope.page = 'create';
    $scope.project = {};

    $scope.create = function(project) {
      if (!$scope.sending || $scope.form.$invalid) {
        $scope.sending = true

        Project.create(project).
          success(function(data) {
            //$location.path('/yours');
            $scope.sending = false;
          }).
          error(function(){
            $scope.errors = "You need to complete the required fields"
            $scope.sending = false;
          })
      }
    }

  });
