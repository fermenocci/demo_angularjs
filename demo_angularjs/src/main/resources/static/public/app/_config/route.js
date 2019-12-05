angular.module("demojs").config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
}]);

angular.module("demojs").config(
    function($routeProvider){
        $routeProvider
            .when("/home",{
                templateUrl:"public/app/home/home.html",
                controller:"HomeCtrl"
            })
            .when("/about",{
                templateUrl:"public/app/about/about.html",
                controller:"AboutCtrl"
            })
        $routeProvider.otherwise({redirectTo:"/home"});
    });



