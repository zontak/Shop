'use strict';

app.controller('AdminAddCategoryController',
    function ($scope, adminService, notifyService, pageSize) {
        console.log('Admin add category loaded');

        $scope.addCategory = function (category) {
            adminService.addCategory(
                category,
                function (data) {
                    notifyService.showInfo('Success Add');
                }, 
                function (err) {
                    notifyService.showError(err);
                }
            );
        }
    }
);


