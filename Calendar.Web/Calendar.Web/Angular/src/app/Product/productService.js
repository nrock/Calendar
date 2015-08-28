var app;
(function (app) {
    var common;
    (function (common) {
        var ProductService = (function () {
            function ProductService($resource) {
                this.$resource = $resource;
            }
            ProductService.prototype.getProductResource = function () {
                return this.$resource("/api/products/:productId");
            };
            ProductService.$inject = ["$resource"];
            return ProductService;
        })();
        common.ProductService = ProductService;
        angular
            .module("common.services")
            .service("productService", ProductService);
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
//# sourceMappingURL=productService.js.map