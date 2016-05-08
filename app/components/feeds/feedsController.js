(function(){
  
  'use strict';

  var devFeeds = angular.module('devCaster.feeds', ['ngRoute'])

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'index.html',
      controller: 'FeedsCtrl'
    });
  }]);

  var feedsList = require('./feedsFactory');

  devFeeds.controller('FeedsCtrl', ['$scope', 'feedsList', function($scope, feedsList) {
        
        $scope.feeds = feedsList.getFeedsList();
        $scope.feedsData = [];
        $scope.feeds.then(function (feeds) {
            $scope.feeds = feeds;
            
            feeds.map(function(feed){
              feedsList.getFeedsData(feed.rss).then(function(feedDataArray){  
                var feedArrayItemsObj = feedDataArray.query.results.item;
                feedArrayItemsObj.map(function(feedData){
                  $scope.feedsData.push(feedData);
                });
              });
            });
        }, function (status) {
            //console.log(status);
        });
  }]);

  devFeeds.filter('filterFeedsForSubject', function () {
    return function (input, scope) {
      return input + ' <strong>' + scope.var2 + '</strong>';
    };
  });

})();