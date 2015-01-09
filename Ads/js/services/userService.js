'use strict';

app.factory('userService',
    function ($http, baseServiceUrl, authService, adsService) {
        return {
            createNewAd: function (adData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    data: adData
                };
                $http(request).success(success).error(error);
            },
            getUserAds: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/ads',
                    headers: authService.getAuthHeaders(),
                    params: params
                };
                $http(request).success(success).error(error);
            },
            deactivateAd: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/ads/deactivate/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            publishAgainAd: function (id, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/ads/publishagain/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            deleteUserAd: function (id, success, error) {
                var request = {
                    method: 'DELETE',
                    url: baseServiceUrl + '/api/user/ads/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getUserAd: function (id, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/ads/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            editUserAd: function (data, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/ads/' + data.id,
                    headers: authService.getAuthHeaders(),
                    data: JSON.stringify(data)
                };
                $http(request).success(success).error(error);
            },
            changeUserPassword: function (data, success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/changePassword',
                    headers: authService.getAuthHeaders(),
                    data: data
                };
                $http(request).success(success).error(error);
            },
            getUserProfile: function (success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/profile',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            editUserProfile: function (data ,success, error) {
                var request = {
                    method: 'PUT',
                    url: baseServiceUrl + '/api/user/profile',
                    headers: authService.getAuthHeaders(),
                    data: data
                };
                $http(request).success(success).error(error);
            },
            filterUserAds: function (params, status, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/user/ads?Status=' + status + '&StartPage='+ params.startPage +'&PageSize='+ params.pageSize +'',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            filterUsers: function (params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/Users?StartPage='+ params.startPage +'&PageSize='+ params.pageSize +'',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            filterUsersSorted: function (sortBy, params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/admin/Users?SortBy='+ sortBy +'&StartPage='+ params.startPage +'&PageSize='+ params.pageSize +'',
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            },
            getUserById: function (id, params, success, error) {
                var request = {
                    method: 'GET',
                    url: baseServiceUrl + 'api/admin/User/' + id,
                    headers: authService.getAuthHeaders()
                };
                $http(request).success(success).error(error);
            }
        }
    }
);

