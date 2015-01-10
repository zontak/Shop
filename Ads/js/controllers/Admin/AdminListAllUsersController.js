'use strict';

app.controller('AdminListAllUsersController',
    function ($scope, $routeParams, $rootScope, userService, notifyService, pageSize) {
        $rootScope.pageTitle = "Users";
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.filterUsers = function () {
            userService.filterUsers(
                $scope.adsParams,
                function success(data) {
                    $scope.users = data;
                    notifyService.showInfo('Successfully loaded users');
                },
                function error(err) {
                    notifyService.showError('Cannot load users');
                }
            );
        };

        $scope.filterUsers();
    }
);


