
describe('BKA webapp by Angular, ', function(){

    var scope, controller;

    beforeEach(module('bka'));
    beforeEach(module('bka.service.dataConsolidator'));

    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        controller = $controller('bkaController', { $scope: scope });
    }));

    describe('BKA Controller, ', function(){

    	it('Should return ouput list with current NZD price and type', function() {

    		scope.nzd.list.should.have.length(8);

            expect(scope.nzd.list[0].price).to.equal("3000.00");
            expect(scope.nzd.list[1].price).to.equal("45.00");
            expect(scope.nzd.list[2].price).to.equal("1020.00");
            expect(scope.nzd.list[3].price).to.equal("14.00");
            expect(scope.nzd.list[4].price).to.equal("10.00");
            expect(scope.nzd.list[5].price).to.equal("15.00");
            expect(scope.nzd.list[6].price).to.equal("8.00");
            expect(scope.nzd.list[7].price).to.equal("10.00");

        });

        it('Should return ouput list with current USD price and type', function() {

            scope.usd.list.should.have.length(8);

            expect(scope.usd.list[0].price).to.equal("2280.00");
            expect(scope.usd.list[1].price).to.equal("34.20");
            expect(scope.usd.list[2].price).to.equal("775.20");
            expect(scope.usd.list[3].price).to.equal("10.64");
            expect(scope.usd.list[4].price).to.equal("7.60");
            expect(scope.usd.list[5].price).to.equal("11.40");
            expect(scope.usd.list[6].price).to.equal("6.08");
            expect(scope.usd.list[7].price).to.equal("7.60");

        });

        it('Should return ouput list with current EURO price and type', function() {

            scope.euro.list.should.have.length(8);

            expect(scope.euro.list[0].price).to.equal("2010.00");
            expect(scope.euro.list[1].price).to.equal("30.15");
            expect(scope.euro.list[2].price).to.equal("683.40");
            expect(scope.euro.list[3].price).to.equal("9.38");
            expect(scope.euro.list[4].price).to.equal("6.70");
            expect(scope.euro.list[5].price).to.equal("10.05");
            expect(scope.euro.list[6].price).to.equal("5.36");
            expect(scope.euro.list[7].price).to.equal("6.70");

        });

    });

});