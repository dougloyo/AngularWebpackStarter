angular.module("app.home", [])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider
            .when("/home",
            {
                controller: "homeController",
                controllerAs: "vm",
                template: require("./home.view.html")
            });
    }])
    .controller("homeController", ["$scope", function($scope) {

        var vm = this;

        vm.x = "Hello World";

        vm.someFunction = function () {
            // Do something..
        };

    }]);