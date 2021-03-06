'use strict';

app.controller('AdminAdsController',
   function ($rootScope, $scope, userService, adminService, adminAdsService, userAdsService, notifyService, pageSize, $location) {
    $rootScope.pageTitle = "Ads";
      $scope.adsParams = {
          'startPage' : 1,
          'pageSize' : pageSize
      };

      $scope.reloadAds = function() {
          userService.getAds(
              $scope.adsParams,
              function success(data) {
                  $scope.ads = data;
              },
              function error(err) {
                  notifyService.showError("Cannot load user ads", err);
              }
          );
      };

      $scope.deleteAds = function(id) {
          adminAdsService.deleteAd(
            id,
              function success() {
                  notifyService.showInfo("Success delete");
                  $location.path('/');
              },
              function error(err) {
                  notifyService.showError("Cannot delete ad", err);
              }
          );
      };
   }
);
