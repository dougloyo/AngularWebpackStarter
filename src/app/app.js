require('./app.scss')

angular.module("app", [
    // Vendor dependencies
    "ngRoute",

    // Application modules
    "app.login",
    "app.home"
])
    .config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'loginController',
            controllerAs: 'vm',
            template: require('./modules/login/login.view.html')
        })
        .otherwise({ redirectTo: '/' });
}]); 