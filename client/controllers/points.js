var myApp = angular.module('myApp');

myApp.controller('PointsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
	console.log('PointsController loaded...');

	$scope.getPoints = function(){
		$http.get('/api/points').success(function(response){
			$scope.points = response;
		});
	}

	$scope.getPoint = function(){
		var id = $routeParams.id;
		$http.get('/api/points/'+id).success(function(response){
			$scope.point = response;
		});
	}

	$scope.addPoint = function(){
		console.log($scope.point);
		$http.post('/api/points/', $scope.point).success(function(response){
			window.location.href='#/points';
		});
	}

	$scope.updatePoint = function(){
		var id = $routeParams.id;
		console.log($scope.point);
		$http.put('/api/points/'+id, $scope.point).success(function(response){
			window.location.href='#/points';
		});
	}

	$scope.removePoint = function(id){
		var id = $routeParams.id;
		console.log($scope.point);
		$http.delete('/api/points/'+id).success(function(response){
			window.location.href='#/points';
		});
	}
}]);