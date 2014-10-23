'use strict';

/**
 * @ngdoc function
 * @name labNgApp.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the labNgApp
 */
angular.module('labNgApp')
  .controller('ProjectsCtrl', function ($scope, $routeParams) {
    $scope.category = $routeParams.category;
    console.log($scope.category);
    // if category is defined you get the category projects
    // if category is not defined you get all projects
  });
