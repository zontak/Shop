'use strict';

app.controller('HomeController',
   function ($scope, adsService, userService, notifyService, pageSize) {
      $scope.adsParams = {
          'startPage' : 1,
          'pageSize' : pageSize
      };

      $scope.reloadAds = function() {
          adsService.getAds(
              $scope.adsParams,
              function success(data) {
                  $scope.ads = data;
              },
              function error(err) {
                  notifyService.showError("Cannot load ads", err);
              }
          );
      };

      ($scope.getProfileData = function() {
          userService.getUserProfile(
            function success(data) {
              $scope.user = data;
              $scope.username = JSON.parse(sessionStorage['currentUser']).username;
            },
                function error(err) {
                    notifyService.showError("Cannot load user data", err);
                }
            );
        }());

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
