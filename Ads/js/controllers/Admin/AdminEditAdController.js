'use strict';

app.controller('AdminEditAdController',
    function ($rootScope, $scope, $location, $routeParams, townsService, categoriesService,
              userService, adminService, notifyService, adminAdsService) {

        $rootScope.pageTitle = "Edit ad";

        adminAdsService.findOne($routeParams.id, function(response) {
            $scope.adData = response;
        });

        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.editAd = function(adData) {
            adminAdsService.edit(
                adData,
                function() {
                    notifyService.showInfo("Succesfully edited ad");
                },
                function() {
                    notifyService.showError("Error editting ad");
                }
            );
        };

        $scope.deleteAdImage = function(adData) {
            adData.imageDataUrl = null;
            adData.changeImage = true;
            adminService.deleteAdImages(
                adData,
                function success(data) {
                    notifyService.showInfo('Successfully deleted image');
                    $location.path("/admin/ads/edit/" + adData.id);
                },
                function error(err) {
                    notifyService.showError('Cannot delete image', err);
                }
            )
        };

        $scope.changeAdImage = function(adData) {
            adData.changeImage = true;
            adminService.changeAdImages(
                adData,
                function success(data) {
                    notifyService.showInfo('Successfully changed image');
                    $location.path("/admin/ads/edit/" + adData.id);
                },
                function error(err) {
                    notifyService.showError('Cannot change image', err);
                }
            )
        };

        $scope.fileSelected = function(fileInputField) {
            delete $scope.adData.imageDataUrl;
            var file = fileInputField.files[0];
            if (file.type.match(/image\/.*/)) {
                var reader = new FileReader();
                reader.onload = function() {
                    $scope.adData.imageDataUrl = reader.result;
                    $(".image-box").html("<img src='" + reader.result + "'>");
                };
                reader.readAsDataURL(file);
            } else {
                $(".image-box").html("<p>File type not supported!</p>");
            }
        };
    }
);
