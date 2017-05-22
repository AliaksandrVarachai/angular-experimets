var router = angular.module('router', ['ui.router']);

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

router.config(function($stateProvider, $urlRouterProvider) {
    /**
     * https://ui-router.github.io/ng1/tutorial/helloworld#full-source-code
     */
    //$urlRouterProvider.otherwise('/home');
    $stateProvider
        .state({
            name: 'login',
            url: '/login',
            templateUrl: 'http://localhost:9080/partials/login.html'
        })
        .state({
            name: 'secure',
            url: '/secure',
            templateUrl: 'http://localhost:9080/partials/secure.html'
        })
        .state({
            name: 'about',
            url: '/about',
            templateUrl: 'http://localhost:9080/partials/about.html'
        })
});

router.controller('LoginController', function($scope) {
    $scope.login = function() {
        winodw.location.href = "https://api.imgur.com/oauth2/authorize?client_id=" + "CLIENT_ID_HERE" + "&response_type=token"
    }
});

router.controller('SecureController', function($scope) {
    $scope.accessToken = JSON.parse(window.localStorage.getItem("imgur")).oauth.access_token;
})

