angular.module("mongo")
.constant("collectionDetailActiveClass", "active")
.constant("collectionDetailActiveBtnClass", "btn-primary")
.controller("collectionDetailCtrl", ["$scope", "$routeParams", "$http", "collectionDetailActiveClass", "collectionDetailActiveBtnClass",
	function($scope, $routeParams, $http, collectionDetailActiveClass, collectionDetailActiveBtnClass) {
		$scope.collection = $routeParams.collection;

		$scope.data = {};

		$http.get("data/col1.json")
			.success(function(data) {
					$scope.data = data;
					$scope.data.selectedNames = [];
			})
			.error(function(error) {
				$scope.data.error = error;
			});

		$scope.selectedStatistic = "count";

		$scope.selectStatistic = function(newStatistic) {
			$scope.selectedStatistic = newStatistic;
		};

		$scope.getStatisticClass = function(statistic) {
			return $scope.selectedStatistic == statistic ? collectionDetailActiveBtnClass : "";
		};

		$scope.getNameClass = function(name) {
			return $scope.data.selectedNames.indexOf(name) != -1 ? collectionDetailActiveClass : "";
		};

		$scope.toggleNameSelect = function(name) {
			var i = $scope.data.selectedNames.indexOf(name);
			if (i != -1) {
				$scope.data.selectedNames.splice(i, 1);
			} else {
				$scope.data.selectedNames.push(name);
			}
		};
	}
]);