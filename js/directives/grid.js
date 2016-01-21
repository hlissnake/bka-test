var moduleName = 'bka.widget.grid';
var app = angular.module(moduleName, []);

app.directive('grid', function(){

    return {
        restrict : 'E',
        scope : {
            data : '=data' // isolated scope inside directive
        },
        template : '<table class="table table-striped">'
                    +'  <thead>'
                    +'      <tr><td colspan="3">Products ({{data.currency}})</td></tr>'
                    +'      <tr>'
                    +'          <td>Name</td>'
                    +'          <td>Price</td>'
                    +'          <td>Type</td>'
                    +'      </tr>'
                    +'  </thead>'
                    +'  <tbody>'
                    +'      <tr ng-repeat="item in data.list">'
                    +'          <td>{{item.name}}</td>'
                    +'          <td>{{item.price}}</td>'
                    +'          <td>{{item.type}}</td>'
                    +'      </tr>'
                    +'  </tbody>'
                    +'</table>',

        compile : function compile() {
            return {
                post : function ($scope, element, attrs){
                    
                }
            }
        }
    }
});

module.exports = moduleName;