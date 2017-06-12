angular.module('mainApp')
	.factory('StorageService', function ($window) {
  	const key = 'auth-token'

	  function getToken () {
	    return $window.localStorage.getItem(key)
	  }

	  function setToken (token) {
	    $window.localStorage.setItem(key, token)
	  }

  return { setToken, getToken }
})
