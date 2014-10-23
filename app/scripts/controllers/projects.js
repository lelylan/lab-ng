'use strict';

/**
 * @ngdoc function
 * @name labNgApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the labNgApp
 */
angular.module('labNgApp')
  .controller('ProjectsCtrl', function ($scope, $rootScope, $routeParams) {
    $rootScope.page = 'projects';
    $scope.category = $routeParams.category;
    // if category is defined you get the category projects
    // if category is not defined you get all projects
  });
