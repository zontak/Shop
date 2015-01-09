'use strict';

app.controller('AdminCategoriesController',
    function ($scope, $routeParams, $rootScope, adminService, notifyService, pageSize) {

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

        $scope.getCategories();
    }
);


