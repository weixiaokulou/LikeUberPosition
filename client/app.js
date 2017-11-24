var myApp = angular.module('myApp',['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider.when('/', {
		controller:'PointsController',
		templateUrl: 'views/points.html'
	})
	.when('/points', {
		controller:'PointsController',
		templateUrl: 'views/points.html'
	})
	.when('/points/details/:id',{
		controller:'PointsController',
		templateUrl: 'views/point_details.html'
	})
	.when('/points/add',{
		controller:'PointsController',
		templateUrl: 'views/add_point.html'
	})
	.when('/points/edit/:id',{
		controller:'PointsController',
		templateUrl: 'views/edit_point.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});