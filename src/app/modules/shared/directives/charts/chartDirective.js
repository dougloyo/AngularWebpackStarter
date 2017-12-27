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

                ctrl.onChartClick = function (points, evt) {
                    
                    var dataPoints = getRandomInt(5,15);
                    var newData = [];
                    for(var i=0; i<dataPoints; i++)
                        newData.push(getRandomInt(5,100));
                    
                    $scope.$apply(function () {
                        ctrl.chart.data = newData;
                    });
                    
                    console.log(newData);
                };

                function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                //console.log($scope.data);
            }],
            
        };
    }]);