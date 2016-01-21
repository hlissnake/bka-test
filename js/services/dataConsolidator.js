var R = require('ramda');
var moduleName = 'bka.service.dataConsolidator';

angular.module(moduleName, [])
    .service('dataConsolidator', function() {

        var l = new LawnmowerRepository().getAll();
        var p = new PhoneCaseRepository().getAll();
        var t = new TShirtRepository().getAll();

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

        var generateFunction = function(setType, transformer){
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

        var createLawnmower = R.partial(generateFunction, [setTypeAsLawnmower]);
        var createPhoneCase = R.partial(generateFunction, [setTypeAsPhoneCase]);
        var createTShirt = R.partial(generateFunction, [setTypeAsTShirt]);

        var concatCurry = R.curry(function(L, P, T, l_d, p_d, t_d){
            return R.concat(R.concat(L(l_d), P(p_d)), T(t_d));
        });

        var processData = function(l, p, t, transformer){
            var Lawnmower = concatCurry( createLawnmower(transformer) );
            var PhoneCase = Lawnmower( createPhoneCase(transformer) );
            var TShirt = PhoneCase( createTShirt(transformer) );

            return TShirt(l, p, t);
        }

        return {
            
            getInNZD : function(){
                return processData(l, p, t, transformToNZD);
            },

            getInUSD : function(){
                return processData(l, p, t, transformToUSD);
            },

            getInEuro : function(){
                return processData(l, p, t, transformToEuro);
            }
        };
    }
);

module.exports = moduleName;
