(function(){
  
  'use strict';

  var angular = require('angular');
  var angularRoute = require('angular-route');

  //TODO:: ver como instanciar os modulos de outro jeito sem chamar todos os controllers no app.js
  var feeds = require('./components/feeds/feedsController');

  angular.module('devCaster', [
      'ngRoute',
      'devCaster.feeds'
  ]).
  config(['$httpProvider', '$routeProvider', function($httpProvider, $routeProvider) {
    //$httpProvider.defaults.useXDomain = true;
    //$routeProvider.otherwise({redirectTo: '/feeds'});
  }]);

})();