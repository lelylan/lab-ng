'use strict';

angular.module('lelylan-lab').provider('lelylanLabClientConfig', function() {
  var config;

  config = { endpoint: 'http://lelylan-lab.herokuapp.com' };

  return {
    configure: function(params) {
      return angular.extend(config, params);
    },

    $get: function() {
      return config;
    }
  }
});
