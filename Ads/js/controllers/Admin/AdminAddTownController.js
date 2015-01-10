'use strict';

app.controller('AdminAddTownController',
    function ($scope, $rootScope, $location, adminService, notifyService, pageSize) {
        $rootScope.pageTitle = "Add Town";

        $scope.town = {
            "name": name
        }

        $scope.addTown = function (name) {
            adminService.addTown(
                $scope.town,
                function (data) {
                    notifyService.showInfo('Success Add');
                    $location.path('/admin/towns')
                }, 
                function (err) {
                    notifyService.showError(err);
                }
            );
        };
    }
);


