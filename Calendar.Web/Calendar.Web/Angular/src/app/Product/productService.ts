module app.common {
    interface IProductService {
        getProductResource(): ng.resource.IResourceClass<IProductResource>;
    }

    interface IProductResource
        extends ng.resource.IResource<app.domain.IProduct> {
    } 

    export class ProductService
        implements IProductService {

        static $inject = ["$resource"];
        constructor(private $resource: ng.resource.IResourceService) {
        }

        getProductResource(): ng.resource.IResourceClass<IProductResource> {
            return this.$resource("/api/products/:productId");
        }
    }
    angular
        .module("common.services")
        .service("productService",
        ProductService);
}