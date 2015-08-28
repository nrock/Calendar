module app {


    var app = angular.module('app', ['ngRoute']); 

    app.config(routeConfig);

    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider): void
    {
        $routeProvider
        .when('/', { templateUrl: 'app/Expense/expense.html' })
        .when('/product', { templateUrl: 'app/Product/productListView.html' })
        .when('/admin', { templateUrl: 'app/Admin/admin.html' })
        .otherwise({ redirectTo: '/' }); // go to the books route
    }
}