var Bacon = require('baconjs');
var R = require('ramda');
var moduleName = 'bka.service.dataConsolidatorBacon';

angular.module(moduleName, [])
    .service('dataConsolidator', function() {

        var setTypeAsLawnmower = R.assoc('type', 'Lawnmower');
        var setTypeAsPhoneCase = R.assoc('type', 'Phone Case');
        var setTypeAsTShirt = R.assoc('type', 'T-Shirt');

        var priceLens = R.lensProp('price');

        var pickValue = R.pick(['id', 'name', 'price']);

        var transformToNZD = function(price){
            return price.toFixed(2);
        }
        var transformToUSD = function(price){
            return (price * 0.76).toFixed(2);
        }
        var transformToEuro = function(price){
            return (price * 0.67).toFixed(2);
        }

        var generatePipe = function(setType, transformer){
            return (
                R.map(
                    R.compose(
                        setType,
                        R.over(priceLens, transformer), 
                        pickValue
                    )
                )
            );
        }

        var createLawnmower = R.partial(generatePipe, [setTypeAsLawnmower]);
        var createPhoneCase = R.partial(generatePipe, [setTypeAsPhoneCase]);
        var createTShirt = R.partial(generatePipe, [setTypeAsTShirt]);


        var lawnmowerStream = Bacon.fromCallback(function(callback){
            callback(new LawnmowerRepository().getAll());
        });
        var phoneCaseStream = Bacon.fromCallback(function(callback){
            callback(new PhoneCaseRepository().getAll());
        });
        var tshirtStream = Bacon.fromCallback(function(callback){
            callback(new TShirtRepository().getAll());
        });

        var processData = function(transformer){

            return lawnmowerStream
                    .map( createLawnmower(transformer) )
                    .combine( phoneCaseStream
                                .map( createPhoneCase(transformer) ), '.concat')
                    .combine( tshirtStream
                                .map( createTShirt(transformer) ), '.concat');

        }

        return {
            
            getInNZD : function(){
                return processData(transformToNZD);
            },

            getInUSD : function(){
                return processData(transformToUSD);
            },

            getInEuro : function(){
                return processData(transformToEuro);
            }
        };
    }
);

module.exports = moduleName;
