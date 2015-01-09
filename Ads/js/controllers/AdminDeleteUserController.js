'use strict';

app.controller('AdminDeleteUserController',
    function ($scope, $routeParams, $rootScope, userService, notifyService, pageSize) {

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
                }
            );
        };

        $scope.getUserById();
    }
);


