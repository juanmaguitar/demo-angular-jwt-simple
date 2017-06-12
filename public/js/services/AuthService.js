angular.module('mainApp')
	.factory('AuthService', function ($http, StorageService) {
    			function login (username, password) {
    				return $http.post('/login', { username, password })
    					.then(response => response.data)
    					.then(data => {
    						StorageService.setToken(data.token)
    						return data
    					})
    			}

    			return { login }
    		})
