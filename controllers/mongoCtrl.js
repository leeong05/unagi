angular.module("mongo")
.constant("dataUrl", "data.json")
.controller("mongoCtrl", function($scope, $http, dataUrl) {

    $scope.data = {
        collections: ['col1', 'col2'],
        statistics: ['count', 'mean'],
        tables: [
            {
                'name': 'col1',
                'heads': ['data', 'statistic', '20150102', '20150101'],
                'rows': [
                    ['close', 'count', 4, 3],
                    ['close', 'mean', 4, 3],
                    ['open', 'count', 4, 3],
                    ['open', 'mean', 4, 3],
                ],
            },
            {
                'name': 'col2',
                'heads': ['data', 'statistic', '20150102', '20150101'],
                'rows': [
                    ['close', 'count', 4, 3],
                    ['close', 'mean', 4, 3],
                    ['open', 'count', 4, 3],
                    ['open', 'mean', 4, 3],
                ],
            },
        ],
    };
});
