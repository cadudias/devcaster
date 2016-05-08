(function(){
    
    'use strict';

    angular.module('devCaster.feeds').
        factory('feedsList', function feedsListFactory($http, $q) {
            
            var getFeedsList = function() {
                var deferred = $q.defer();
                $http({ method: "GET", url: "/app/components/feeds/feeds.json" })
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                    deferred.reject(status);
                });
                
                return deferred.promise;
            }
            
            var getFeedsData = function(feedRSS) {
                var deferred = $q.defer();
                var query = 'select * from rss where url="' + feedRSS + '"';
                var proxy_url = "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(query) + '&format=json&diagnostics=false&callback=JSON_CALLBACK';
                $http.jsonp(proxy_url).success(deferred.resolve);
                return deferred.promise;                
            }
    
            return{
                getFeedsList: getFeedsList,
                getFeedsData: getFeedsData
            }
        }
    );
  
  })();