angular.module('mainApp')
	.config(function ($routeProvider) {
  $routeProvider
		.when('/profile', {
		  templateUrl: '/js/routes/profile/template.html',
		  secure: true
	})
})
