'use strict';

app.controller('AdminCategoriesController',
    function ($scope, $routeParams, $location, $rootScope, adminService, notifyService, pageSize) {
        $rootScope.pageTitle = "Categories";

        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.getCategories = function () {
            adminService.getAllCategories(
                $scope.adsParams,
                function success(data) {
                    $scope.categories = data;
                    notifyService.showInfo('Successfully get categories');
                },
                function error(err) {
                    notifyService.showError('Cannot load categories');
                }
            );
        };

        $scope.deleteCategory = function (id) {
            adminService.deleteCategory(
                id,
                function success(data) {
                    $location.path('/admin/categories');
                    notifyService.showInfo('Successfully delete category');
                },
                function error(err) {
                    notifyService.showError('Cannot load categories');
                }
            );
        };

        $scope.getCategories();
    }
);


