'use strict';

app.controller('AdminTownsController',
    function ($scope, $routeParams, $location, $rootScope, adminService, notifyService, pageSize) {
        $rootScope.pageTitle = "Towns";

        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };
        
        $scope.editTown = function (id, townName) {
            var test = {
                "name": townName,
            }
            adminService.editTown(
                id,
                test,
                function (data) {
                    notifyService.showInfo('Success Add');
                    $location.path('/admin/towns')
                }, 
                function (err) {
                    notifyService.showError(err);
                    console.log(err);
                }
            );
        }

        $scope.getTowns = function () {
            adminService.getAllTowns(
                $scope.adsParams,
                function success(data) {
                    $scope.towns = data;
                    console.log($scope.towns);
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
                    notifyService.showError('Cannot delete towns');
                }
            );
        };

        $scope.getTowns();
    }
);


