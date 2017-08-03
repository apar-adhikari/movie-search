'use strict';

angular.module('myApp', [])
  .controller('MovieController', function($scope, $http){
    $scope.$watch('search', function() {
      fetch();
    });

    $scope.search = "Dunkirk";

    // function fetch(){
    //   $http.get("http://localhost/movieapi?query=" + $scope.search)
    //   .then(function(response){ $scope.details = response.data; });
    //
    //   $http.get("http://localhost/movieapi?act=getall")
    //   .then(function(response){ $scope.related = response.data; });
    // }

    function fetch(){
      $http.get("http://www.omdbapi.com/?apikey=19b68321&t=" + $scope.search + "&tomatoes=true&plot=full")
      .then(function(response){ $scope.details = response.data; });

      $http.get("http://www.omdbapi.com/?apikey=19b68321&s=" + $scope.search)
      .then(function(response){ $scope.related = response.data; });
    }

    $scope.update = function(movie){
      $scope.search = movie.Title;
    };

    $scope.select = function(){
      this.setSelectionRange(0, this.value.length);
    }
  });
