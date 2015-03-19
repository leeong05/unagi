angular.module("mongo")
.controller("mongoCtrl", ["$scope", "$http", 
	function($scope, $http) {

		$scope.data = {};
		
  	$http.get("data/mongo_index.json")
  		.success(function(data) {
    		$scope.data = data;
  		})
  		.error(function(error) {
    		$scope.data.error = error;
  		});
	}
]);
