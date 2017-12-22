angular.module("app.directives")
    .directive('chartDirective', [function () {
        return {
            restrict: 'E',
            template: require("./chart.view.html"),
            controllerAs:'ctrl',
            scope:{
                data:'='
            },
            controller: ['$scope', function ($scope) {
                var ctrl = this;
                ctrl.model = {};
                ctrl.model.x = "here";

                ctrl.chart=$scope.data;

                //console.log($scope.data);
            }],
            
        };
    }]);