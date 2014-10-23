'use strict';

/**
 * @ngdoc overview
 * @name labNgApp
 * @description
 * # labNgApp
 *
 * Main module of the application.
 */
angular
  .module('labNgApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/yours', {
        templateUrl: 'views/projects.html',
        controller: 'YoursCtrl'
      })
      .when('/create', {
        templateUrl: 'views/create.html',
        controller: 'CreateCtrl'
      })
      .when('/edit/id', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .when('/delete/:id', {
        templateUrl: 'views/delete.html',
        controller: 'DeleteCtrl'
      })
      .when('/projects/all', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:category', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/categories', {
        templateUrl: 'views/categories.html',
        controller: 'CategoriesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
