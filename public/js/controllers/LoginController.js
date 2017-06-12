angular.module('mainApp')
	.controller('LoginController', function ($scope, AuthService, DataService) {
	  $scope.login = function (event) {
	    event.preventDefault()
	    const { username, password } = $scope

	    AuthService.login(username, password)
					.then(console.log)
					.catch(console.log)
	  }

	  $scope.getData = function () {
	    DataService.getSecretData()
					.then(data => $scope.message = data.msg)
		 }
})
