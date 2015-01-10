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
                $http(request).success(success).error(error);
            },
            addCategory: function (data, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/admin/Categories',
                    headers: authService.getAuthHeaders(),
                    data: JSON.stringify(data)
                }
                $http(request).success(success).error(error);
            },
            getAllTowns: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/Towns?StartPage='+ params.startPage +'&PageSize='+ params.pageSize +'',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            deleteTown: function (id, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/admin/Towns/' + id,
                    headers: authService.getAuthHeaders()
                }
                $http(request).success(success).error(error);
            },
            addTown: function (data, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/admin/Towns',
                    headers: authService.getAuthHeaders(),
                    data: JSON.stringify(data)
                }
                $http(request).success(success).error(error);
            }
        }
    }
);

