'use strict';

app.controller('AdminDeleteCategoryController',
    function ($scope, $routeParams, $location, $rootScope, adminService, notifyService, pageSize) {

        $scope.deleteCategory = function () {
            adminService.deleteCategory(
                $routeParams.id,
                function success(data) {
                    $location.path('/admin/categories');
                    console.log(data + 'bla');
                    notifyService.showInfo('Successfully get user');
                },
                function error(err) {
                    notifyService.showError('Cannot load categories');
                }
            );
        };

        $scope.deleteCategory($routeParams.id);
    }
);


