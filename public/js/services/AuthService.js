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

	  function register (username, password) {
	    return $http.post('/register', { username, password })
					.then(response => response.data)
	  }

	  function isLoggedIn() {
        const token = StorageService.getToken()
        if (!token) return false
       	return true
    }


  	return { login, register, isLoggedIn }
	})
