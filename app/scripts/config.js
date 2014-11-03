"use strict";

 angular.module('config', [])

.constant('ENV', {name:'production',endpoint:'http://lelylan-lab.herokuapp.com',credentials:{site:'http://people.lelylan.com',clientId:'c5297d9ad0710a3cfcd5983f369c8333c6cff60df1f2672cd5d3b2fed270c0d7',redirectUri:'http://lelylan.github.io/lab-dashboard-ng',profileUri:'http://api.lelylan.com/me'}})

;