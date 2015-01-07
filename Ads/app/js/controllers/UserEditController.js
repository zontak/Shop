'use strict';

app.controller('UserEditController',
   function ($scope, userService, notifyService, pageSize, townsService) {
   		$scope.editProfile = function(user) {
   			var newUser  = {};
   			for(var key in user) {
			    if(user.hasOwnProperty(key)) {
			    	if(key == 'townId') {
			    		user[key] = Number(user[key]);
			    	}
			    }
			}
	          userService.editUserProfile(
	          	user,
	              function success(data) {
	                  notifyService.showInfo("Success Edited");
	              },
	              function error(err) {
	                  notifyService.showError("Cannot edit user profile", err);
	              }
	          );
        };

        ($scope.getProfileData = function() {
        	userService.getUserProfile(
        		function success(data) {
        			$scope.user = data;
        			$scope.towns = townsService.getTowns();
        		},
                function error(err) {
                    notifyService.showError("Cannot load user ads", err);
                }
            );
        }());
   }
);