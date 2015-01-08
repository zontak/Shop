'use strict';

app.controller('LeftSidebarController', function ($scope, $rootScope) {

    $scope.adsTypeClicked = function (status) {
        console.log('ads type clicked');
        $scope.statusClickedId = status;
        $rootScope.$broadcast("adsByType", status);
    };
});