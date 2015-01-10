'use strict';

app.controller('AdminDeleteCategoryController',
    function ($scope, $routeParams, $location, $rootScope, adminService, notifyService, pageSize) {
        $rootScope.pageTitle = "Delete Category";
        $scope.deleteCategory = function () {
            adminService.deleteCategory(
                $routeParams.id,
                function success(data) {
                    $location.path('/admin/categories');
                    notifyService.showInfo('Successfully get user');
                },
                function error(err) {
                    notifyService.showError('Cannot load categories');
                }
            );
        };
    }
);


