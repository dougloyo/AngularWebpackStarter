angular
    .module('app.login', [])
    .controller('loginController', ['$location', function($location) {

            var vm = this;

            vm.testVariable = "Hello World";

            vm.login = function () {
                $location.path("/home");
            };
        }
    ]);
