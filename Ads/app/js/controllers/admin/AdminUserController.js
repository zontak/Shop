app.controller('AdminUserController',
   function ($scope, adminService, adminAdsService, userAdsService, notifyService, pageSize, $location) {
      $scope.users = adminService.getUsers();
      $scope.isDescending = false;
      $scope.loadUsersBy = function(criteria) {
          adminService.getUsers(criteria, isDescending).then(function(users){
               $scope.users = users;
          });
      }
   }
);