var app = angular.module("MadLibs", ["ngRoute"])
  .constant("firebaseURL", "https://madlib-demo.firebaseio.com/");

app.config(function($routeProvider) {
  let authConfig = {
    apiKey: "AIzaSyCOOGMthG0zFso2EchsmuqJ0ZTSqx7sV_4",
    authDomain: "madlib-demo.firebaseapp.com"
  }

  firebase.initializeApp(authConfig);

  $routeProvider.
   when('/select', {
     templateUrl: 'partials/selectMadlib.html',
     controller: 'selectMadlibCtrl'
   })
   .when('/', {
     templateUrl: 'partials/loginRegister.html',
     controller: 'loginCtrl'
   })
   .when('/input', {
     templateUrl: 'partials/inputMadlib.html',
     controller: 'inputMadlibCtrl'
   })
   .when('/output', {
     templateUrl: 'partials/outputMadlib.html',
     controller: 'outputMadlibCtrl'
   })
   .when('/login', {
     templateUrl: 'partials/loginRegister.html',
     controller: 'loginCtrl'
   })
   .when('/logout', {
     templateUrl: 'partials/loginRegister.html',
     controller: 'loginCtrl'
   })
   .when('/beesknees', {
     templateUrl: 'partials/inputMadlib.html',
     controller: 'inputMadlibCtrl'
   });
});
