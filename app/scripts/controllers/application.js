'use strict';

/**
 * @ngdoc function
 * @name lelylan-lab.controller:ProjectsCtrl
 * @description
 * # ProjectsCtrl
 * Controller of the lelylan-lab
 */
angular.module('lelylan-lab')
  .controller('ApplicationCtrl', function ($scope, $rootScope, $timeout, AccessToken) {
    $timeout(function() {
      $rootScope.logged = !!AccessToken.get();
    }, 0);
  });
