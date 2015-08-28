var app;
(function (app) {
    var productList;
    (function (productList) {
        var ProductListCtrl = (function () {
            function ProductListCtrl(productService) {
                var _this = this;
                this.productService = productService;
                this.title = "Product List";
                this.showImage = false;
                this.products = [];
                var productResource = productService.getProductResource();
                productResource.query(function (data) {
                    _this.products = data;
                });
            }
            ProductListCtrl.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            ProductListCtrl.$inject = ["productService"];
            return ProductListCtrl;
        })();
        angular
            .module("app")
            .controller("ProductListController", ProductListCtrl);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
