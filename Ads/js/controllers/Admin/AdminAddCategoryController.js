'use strict';

app.controller('AdminAddCategoryController',
    function ($scope, $rootScope, $location, adminService, notifyService, pageSize) {
        $rootScope.pageTitle = "Add Category";

        $scope.category = {
            "name": name
        }

        $scope.addCategory = function (name) {
            adminService.addCategory(
                $scope.category,
                function (data) {
                    notifyService.showInfo('Success Add');
                    $location.path('/admin/categories');
                }, 
                function (err) {
                    notifyService.showError(err);
                    console.log(err);
                }
            );
        }
    }
);


