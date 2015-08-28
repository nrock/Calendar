var app;
(function (app_1) {
    var app = angular.module('app', ['ngRoute']);
    app.config(routeConfig);
    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider) {
        $routeProvider
            .when('/', { templateUrl: 'app/Expense/expense.html' })
            .when('/product', { templateUrl: 'app/Product/productListView.html' })
            .when('/admin', { templateUrl: 'app/Admin/admin.html' })
            .otherwise({ redirectTo: '/' }); // go to the books route
    }
})(app || (app = {}));
//# sourceMappingURL=app.js.map