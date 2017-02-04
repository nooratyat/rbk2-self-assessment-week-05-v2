angular.module('app', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/fizzbuzz', {
        templateUrl: 'partials/fizzbuzz.html',
        controller: 'fizzbuzzCtrl'
      })
      .when('/fozzbazz', {
        templateUrl: 'partials/fozzbazz.html',
        controller: 'fozzbazzCtrl'
      })
      .otherwise({
        redirectTo: '/fizzbuzz'
      });
  })
// DO NOT MODIFY CODE ABOVE THIS LINE

/*  HINT: Make sure your controllers, methods, and variables 
    are named what $routeProvider and the partials are expecting  */

  .factory('counter', function(){
  return{
    count:0,
increment:function(){
  return count++
}

  }


  })
  .controller('fizzbuzzCtrl', function($scope,counter){
    $scope.display={};
    counter.increment().then(function(count){
      if(count%3===0 && count%5===0){
        $scope.display= "FIZZBUZZ"
      }
      else if( count%3==0){
      $scope.display=   "FIZZ"
      }
      else if( count %5 ===0){
       $scope.display=  "BUZZ"
      }

    })



  })
  .controller('fozzbazzCtrl', function($scope,counter){

    $scope.display={};
    counter.increment().then(function(count){
      if(count%4===0 && count%6===0){
      $scope.display=  "FOZZBAZZ"
      }
      else if( count%4==0){
          $scope.display=  "FOZZ"
      }
      else if( count %6 ===0){
       $scope.display= "BAZZ"
      }

    })




  });
