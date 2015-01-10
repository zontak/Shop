'use strict';

app.controller('AdminDeleteUserController',
    function ($scope, $routeParams, authService, $rootScope, userService, notifyService, pageSize) {

        $rootScope.pageTitle = "Delete User";

        $scope.getUserById = function () {
            userService.getUserById(
                $routeParams.id,
                function success(data) {
                    $scope.user = data;
                    console.log(data);
                    notifyService.showInfo('Successfully get user');
                },
                function error(err) {
                    notifyService.showError('Cannot load user');
                    console.log(err);
                }
            );
        };

        console.log(authService.sessionStorage['currentUser']);

        $scope.getUserById();
    }
);


