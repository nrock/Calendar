module app.productList {
    interface IProductListModel {
        title: string;
        showImage: boolean;
        products: app.domain.IProduct[];
        toggleImage(): void;
    }

    class ProductListCtrl implements IProductListModel {
        title: string;
        showImage: boolean;
        products: app.domain.IProduct[];

        static $inject = ["productService"];
        constructor(private productService: app.common.ProductService) {
            this.title = "Product List";
            this.showImage = false;
            this.products = [];

            var productResource = productService.getProductResource();
            productResource.query((data: app.domain.IProduct[]) => {
                this.products = data;
            });
        }

        toggleImage(): void {
            this.showImage = !this.showImage;
        }
    }
    angular
        .module("app")
        .controller("ProductListController",
            ProductListCtrl);
}