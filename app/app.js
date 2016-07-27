var app = angular.module("MadLibs", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider.
   when('/select', {
     templateUrl: 'partials/selectMadlib.html',
     controller: 'selectMadlibCtrl'
   })
   .when('/input', {
     templateUrl: 'partials/inputMadlib.html',
     controller: 'inputMadlibCtrl'
   })
   .when('/output', {
     templateUrl: 'partials/outputMadlib.html',
     controller: 'outputMadlibCtrl'
   });
});
