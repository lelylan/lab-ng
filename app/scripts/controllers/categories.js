'use strict';

/**
 * @ngdoc function
 * @name lelylan-lab.controller:CategoriesCtrl
 * @description
 * # CategoriesCtrl
 * Controller of the lelylan-lab
 */
angular.module('lelylan-lab')
  .controller('CategoriesCtrl', function ($scope, $rootScope, Category) {
    $rootScope.page = 'categories';

    Category.all().
      success(function(data) {
        $scope.tags = data;
      });

  });
