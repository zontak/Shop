'use strict';

app.controller('AdminTownsController',
    function ($scope, $routeParams, $location, $rootScope, adminService, notifyService, pageSize) {
        $rootScope.pageTitle = "Towns";

        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.getTowns = function () {
            adminService.getAllTowns(
                $scope.adsParams,
                function success(data) {
                    $scope.towns = data;
                    notifyService.showInfo('Successfully get towns');
                },
                function error(err) {
                    notifyService.showError('Cannot load towns');
                }
            );
        };

        $scope.deleteTown = function (id) {
            adminService.deleteTown(
                id,
                function success(data) {
                    $location.path('/admin/towns');
                    notifyService.showInfo('Successfully delete towns');
                },
                function error(err) {
                    notifyService.showError('Cannot load categories');
                }
            );
        };

        $scope.getTowns();
    }
);


