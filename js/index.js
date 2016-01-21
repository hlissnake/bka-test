var grid = require('./directives/grid');
var dataConsolidator = require('./services/dataConsolidator');

angular.module('bka', [ grid, dataConsolidator ])
    .controller('bkaController',["$scope", "dataConsolidator", function($scope, dataConsolidator){
        
        $scope.nzd = {
            currency : 'NZD',
            list : dataConsolidator.getInNZD()
        };
        $scope.usd = {
            currency : 'USD',
            list : dataConsolidator.getInUSD()
        };
        $scope.euro = {
            currency : 'Euro',
            list : dataConsolidator.getInEuro()
        };

    }]);

module.exports = "albums";