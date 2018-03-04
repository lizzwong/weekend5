const app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/find', {
        templateUrl: '/views/find.html',
        controller: 'FindController as fc'
    }).when('/favorites', {
        templateUrl: '/views/favorites.html',
        controller: 'FavoriteController as vm'
    }).otherwise({ redirectTo: '/' });
});
