'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination', 'angular-loading-bar']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 5);

app.config(function ($routeProvider) {

    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });

    $routeProvider.when('/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    });

    $routeProvider.when('/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    });

    $routeProvider.when('/user/ads/publish', {
        templateUrl: 'templates/user/publish-new-ad.html',
        controller: 'UserPublishNewAdController'
    });

    $routeProvider.when('/user/ads', {
        templateUrl: 'templates/user/user-ads.html',
        controller: 'UserAdsController'
    });

    $routeProvider.when('/user/ads/delete/:id', {
        controller: 'UserAdsController'
    });

    $routeProvider.when('/user/ads/deactivate/:id', {
        controller: 'UserAdsController'
    });

    $routeProvider.when('/user/ads/publishAgain/:id', {
        controller: 'UserAdsController'
    });

    $routeProvider.when('/user/profile', {
        templateUrl: 'templates/user/edit.html',
        controller: 'UserEditController'
    });

    $routeProvider.when('/ads/user/edit/changePassword', {
        templateUrl: 'templates/user/change-password.html',
        controller: 'UserEditController'
    });

    $routeProvider.when('/user/ads/edit/:id/:title', {
        templateUrl: 'templates/user/edit-add.html',
        controller: 'UserEditAdController'
    });

    $routeProvider.when('/admin/ads/edit/:id/:title', {
        templateUrl: 'templates/admin/edit-add.html',
        controller: 'AdminEditAdController'
    });

    $routeProvider.when('/admin/ads/delete/:id', {
        controller: 'AdminAdsController'
    });

    $routeProvider.when('/admin/users', {
        templateUrl: 'templates/admin/get-users.html',
        controller: 'AdminUserController'
    });

    $routeProvider.otherwise(
        { redirectTo: '/' }
    );
});

app.run(function ($rootScope, $location, authService) {
  $rootScope.$on('$locationChangeStart', function (event) {
    if ($location.path().indexOf("/user/") != -1 && !authService.isLoggedIn()) {
      $location.path("/");
    }
  });
});

