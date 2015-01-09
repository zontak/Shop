'use strict';

app.controller('AdminFilterUsersController',
    function ($scope, $routeParams, $rootScope, userService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.filterUsers = function () {
            userService.filterUsersSorted(
                $routeParams.sortBy,
                $scope.adsParams,
                function success(data) {
                    $scope.users = data;
                    console.log(data);
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


