require('./app.scss')

angular.module("app", [
    // Vendor dependencies
    "ngRoute",

    // Application modules
    "app.login",
    "app.home"
])
.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
$routeProvider
    .when('/',
    {
        controller: 'loginController',
        controllerAs: 'vm',
        template: require('./modules/login/login.view.html')
    })
    .otherwise({ redirectTo: '/' });

    // use the HTML5 History API
    $locationProvider.html5Mode(true);
}]); 