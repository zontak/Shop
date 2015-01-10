'use strict';

app.controller('AdminEditAdController',
    function ($rootScope, $scope, $location, $routeParams, townsService, categoriesService,
              userService, notifyService, adminAdsService) {

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
        }

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
