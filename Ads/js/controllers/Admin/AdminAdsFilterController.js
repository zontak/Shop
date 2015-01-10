'use strict';

app.controller('AdminAdsFilterController',
    function ($scope, $routeParams, $location, userService, $rootScope, adminService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage' : 1,
            'pageSize' : pageSize
        };

        $scope.reloadAds = function() {
            userService.getUserAds(
                  $scope.adsParams,
                  function success(data) {
                      $scope.ads = data;
                      console.log(data);
                  },
                  function error(err) {
                      notifyService.showError("Cannot load user ads", err);
                  }
            );
        };

        $scope.filterAdminAd = function () {
            adminService.filterAdminAds(
                $scope.adsParams,
                $routeParams.status,
                function success(data) {
                    $scope.ads = data;
                    notifyService.showInfo('Successfully loaded inactive ads');
                },
                function error(err) {
                    notifyService.showError('Cannot load inactive ads');
                }
            );
        };

        $scope.rejectUserAds = function (id) {
            adminService.rejectAd(
                id,
                function success(data) {
                    notifyService.showInfo('Successfully reject ad');
                    $scope.reloadAds();
                    $location.path('/admin/ads');
                },
                function error(err) {
                    notifyService.showError('Cannot reject ad', err);
                }
            );
        };

        $scope.approveAds = function (id) {
            adminService.approveAd(
                id,
                function success(data) {
                    notifyService.showInfo('Successfully approve again ad');
                    $scope.reloadAds();
                    $location.path('/admin/ads');
                },
                function error(err) {
                    notifyService.showError('Cannot approve again ad');
                }
            );
        };

        $scope.filterAdminAd();
    }
);


