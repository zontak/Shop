'use strict';

app.factory('adminService',
    function ($http, baseServiceUrl, authService, adsService) {
        return {
            getAllCategories: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/Categories?StartPage='+ params.startPage +'&PageSize='+ params.pageSize +'',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            deleteCategory: function (id, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/admin/Categories/' + id,
                    headers: authService.getAuthHeaders()
                }
            },
            addCategory: function (data, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/admin/Categories',
                    headers: authService.getAuthHeaders(),
                    data: JSON.stringify(data)
                }
            }
        }
    }
);

