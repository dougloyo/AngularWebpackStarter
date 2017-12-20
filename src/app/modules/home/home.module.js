require('./home.style.scss')

angular.module("app.home", [])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/home",
            {
                controller: "homeController",
                controllerAs: "ctrl",
                template: require("./home.view.html")
            });
    }])
    .controller("homeController", ["$log", function($log) {

        var ctrl = this;
        ctrl.model = {};
        ctrl.grid = {};

        ctrl.grid.widgets = [{ x:0, y:0, width:1, height:1 }, { x:1, y:0, width:3, height:1 }, { x:2, y:1, width:1, height:1 }];

        ctrl.grid.options = {
                cellHeight: 200,
                verticalMargin: 20,
                animate: true
            };

            ctrl.grid.addWidget = function() {
                var newWidget = { x:0, y:0, width:2, height:1, autoPos:1 };
                ctrl.grid.widgets.push(newWidget);
            };

            ctrl.grid.removeWidget = function(w) {
                var index = ctrl.grid.widgets.indexOf(w);
                ctrl.grid.widgets.splice(index, 1);
            };

            ctrl.grid.onChange = function(event, items) {
                $log.log("onChange event: "+event+" items:"+items);
            };

            ctrl.grid.onDragStart = function(event, ui) {
                $log.log("onDragStart event: "+event+" ui:"+ui);
            };

            ctrl.grid.onDragStop = function(event, ui) {
                $log.log("onDragStop event: "+event+" ui:"+ui);
            };

            ctrl.grid.onResizeStart = function(event, ui) {
                $log.log("onResizeStart event: "+event+" ui:"+ui);
            };

            ctrl.grid.onResizeStop = function(event, ui) {
                $log.log("onResizeStop event: "+event+" ui:"+ui);
            };

            ctrl.grid.onItemAdded = function(item) {
                $log.log("onItemAdded item: "+item);
            };

            ctrl.grid.onItemRemoved = function(item) {
                $log.log("onItemRemoved item: "+item);
            };

    }]);