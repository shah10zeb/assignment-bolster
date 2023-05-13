import { Injectable } from '@nestjs/common';
import { Product } from 'src/client/db-client/postgres/products/products.entity';
import { ProductImplementation } from 'src/client/db-client/postgres/products/products.implementation';
import { UserImplementation } from 'src/client/db-client/postgres/users/users.implementation';

@Injectable()
export class ProductsService {
  constructor(
    private productClient: ProductImplementation,
    private userClient: UserImplementation,
  ) {}

  async listAllProducts(): Promise<Product | any> {
    return this.productClient.getAllProducts();
  }

  async listUsersProducts(username: string): Promise<Product | any> {
    const userDetails = await this.userClient.getUser(username);
    const productIds = this.getProductIdsFormProductFeatures(
      userDetails.productFeatures,
    );
    const userProducts = await this.productClient.getSpecificProducts(
      productIds,
    );
    return this.filterUsersFeatures(userProducts, userDetails.productFeatures);
  }
  private getProductIdsFormProductFeatures(productFeatures: string[]) {
    const productIds = new Set<string>();
    for (const productFeature of productFeatures) {
      const prodID = productFeature.slice(0, 4);
      productIds.add(prodID);
    }
    return [...productIds];
  }

  private filterUsersFeatures(products: Product[], featuresIds: string[]) {
    const filteredProduct = [];
    console.log(products, featuresIds);
    for (const product of products) {
      let tempProduct = product;
      const tempFeatures = [];
      for (const feature of product.features) {
        console.log(feature, featuresIds.includes(feature.featureId));
        if (featuresIds.includes(feature.featureId)) {
          tempFeatures.push(feature);
        }
      }
      tempProduct = { ...tempProduct, features: tempFeatures };
      filteredProduct.push(tempProduct);
    }
    return filteredProduct;
  }
}
