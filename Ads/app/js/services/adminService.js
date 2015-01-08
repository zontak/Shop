'use strict';

app.factory('adminService',
    function ($http, baseServiceUrl, authService) {
        return {

            getUsers: function(data, success, error) {
                var request = {
                    data: JSON.stringify(data),
                    method: 'GET',
                    //url: baseServiceUrl + 'api/admin/Users?SortBy=UserName&StartPage={StartPage}&PageSize={PageSize}',
                    headers: authService.getAuthHeaders()
                }
                $http(request).success(success).error(error);
            }
        }
    }
);
