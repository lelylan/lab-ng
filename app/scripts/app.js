'use strict';

/**
 * @ngdoc overview
 * @name lelylan-lab
 * @description
 * # lelylan-lab
 *
 * Main module of the application.
 */
angular
  .module('lelylan-lab', [
    'ngAnimate',
    'ngRoute',
    'ngTouch',
    'oauth',
    'naif.base64',
    'lelylan-lab.client.project',
    'lelylan-lab.client.category',
    'lelylan-lab.utils'
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
      .when('/access_token=:accessToken', {
        template: '',
        controller: function ($location, AccessToken) {
          var hash = $location.path().substr(1);
          AccessToken.setTokenFromString(hash);
          $location.path('/');
          $location.replace();
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });
