'use strict';

var client = angular.module('lelylan-lab.client.category', []);

client.factory('Category', [
  '$http',
  'lelylanLabClientConfig',
  'LelylanLabClientUtils',

  function($http, config, Utils) {

  var service = {};
  var base = config.endpoint + '/tags';


  service.all = function(params, _options) {
    var options = { params: params, headers: Utils.headers() };
    return $http.get(base, Utils.merge(options, _options));
  }

  return service;
}]);
