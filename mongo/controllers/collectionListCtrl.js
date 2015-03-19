angular.module("mongo")
.constant("collectionListActiveClass", "active")
.constant("collectionListActiveBtnClass", "btn-primary")
.controller("collectionListCtrl", ["$scope", "collectionListActiveClass", "collectionListActiveBtnClass",
	function($scope, collectionListActiveClass, collectionListActiveBtnClass) {
		var selectedCollection;
		var selectedStatistic = "count";

		$scope.selectCollection = function(newCollection) {
			selectedCollection = newCollection;
		};

		$scope.collectionFilterFn = function(table) {
			return !selectedCollection || selectedCollection == table.name;
		};

		$scope.getCollectionClass = function(collection) {
			return selectedCollection == collection ? collectionListActiveClass : "";
		};

		$scope.getALLClass = function() {
			return !selectedCollection ? collectionListActiveClass : "";
		};

		$scope.selectStatistic = function(newStatistic) {
			selectedStatistic = newStatistic;
		};

		$scope.getStatisticClass = function(statistic) {
			return selectedStatistic == statistic ? collectionListActiveBtnClass : "";
		};

		$scope.statisticFilterFn = function(row) {
			return selectedStatistic == row[1];
		};
	}
]);