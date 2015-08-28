module app {
    var main = angular.module("app",
        ["ngRoute",
            "common.services",
            "productResourceMock"]);

    main.config(routeConfig);

    routeConfig.$inject = ["$routeProvider"];
    function routeConfig($routeProvider: ng.route.IRouteProvider): void {

        $routeProvider
            .when("/productList",
                {
                    templateUrl: "app/product/productListView.html",
                    controller: "ProductListController as vm"
                })
            .when("/productDetail/:productId",
                {
                    templateUrl: "/app/product/productDetailView.html",
                    controller: "ProductDetailCtrl as vm"
                })
            .otherwise("/productList");
    }
}