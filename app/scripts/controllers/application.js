'use strict';

/**
 * @ngdoc function
 * @name lelylan-lab.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the lelylan-lab
 */
angular.module('lelylan-lab')
  .controller('ApplicationCtrl', function ($scope, $rootScope, $timeout, AccessToken, Category, Project, Endpoint, ENV) {

    $scope.credentials = ENV.credentials;

    $timeout(function() {
      $scope.logged = !!AccessToken.get();
    }, 0);

    Category.all().
      success(function(data) {
        $scope.menuTags = data;
      });

    Project.public().
      success(function(data) {
        $scope.total = data.length;
      });

    // Automatically redirect to the oauth server when the access token is not valid
    $scope.$on('oauth:expired', function(event) {
      Endpoint.redirect();
    });

    // order categories menu
    $rootScope.predicate = '-count';
  });
