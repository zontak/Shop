'use strict';

app.controller('UserAdsController',
   function ($scope, userService, userAdsService, notifyService, pageSize, $location) {
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

      $scope.deleteAds = function(id) {
          userAdsService.delete(
            id,
              function success() {
                  notifyService.showInfo("Success delete");
                  $location.path('/user/ads');
              },
              function error(err) {
                  notifyService.showError("Cannot delete ad", err);
              }
          );
      };

      $scope.deactivateAds = function(id) {
          userService.deactivateAd(
            id,
              function success() {
                  notifyService.showInfo("Success deactivate");
                  $location.path('/user/ads');
              },
              function error(err) {
                  notifyService.showError("Cannot deactivate ad", err);
              }
          );
      };

      $scope.publishAgainAds = function(id) {
          userService.publishAgainAd(
             id,
             function success() {
                 notifyService.showInfo("Success publish again");
                 $location.path('/user/ads');
             },
             function error(err) {
                 notifyService.showError("Cannot publish again ad", err);
             }
          );
      };

      $scope.reloadAds();
	  
      $scope.$on("categorySelectionChanged", function(event, selectedCategoryId) {
          $scope.adsParams.categoryId = selectedCategoryId;
          $scope.adsParams.startPage = 1;
          $scope.reloadAds();
      });

      $scope.$on("townSelectionChanged", function(event, selectedTownId) {
          $scope.adsParams.townId = selectedTownId;
          $scope.adsParams.startPage = 1;
          $scope.reloadAds();
      });
   }
);
