// var app = angular.module('app', []);
// app.controller('Ctrl', ['$scope', function($scope) {
//     $scope.name = 'Alex';
// }]);

var router = angular.module('router', ['ui.router']);
router.config(function($stateProvider, $urlRouterProvider) {
    /**
     * https://ui-router.github.io/ng1/tutorial/helloworld#full-source-code
     */
    //$urlRouterProvider.otherwise('/home');
    $stateProvider
        .state({
            name: 'home',
            url: '/home',
            templateUrl: 'http://localhost:9080/partials/home.html'
        })
        .state({
            name: 'secret',
            url: '/secret',
            templateUrl: 'http://localhost:9080/partials/secret.html'
        })
        .state({
            name: 'public',
            url: '/public',
            templateUrl: 'http://localhost:9080/partials/public.html'
        })

})

