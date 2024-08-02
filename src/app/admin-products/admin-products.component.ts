import { Component } from '@angular/core';
import { ProductRepository } from '../repository.model';
import { Product } from '../product.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent {
  products;
  model: ProductRepository;
  selectedProduct: Product | null;

  constructor() {
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
    this.selectedProduct = new Product();
  }

  getSelected(product: Product): boolean {
    return product === this.selectedProduct;
  }

  editProduct(product: Product) {
    this.selectedProduct = product;
  }

  SaveChanges(): void {
    if (this.selectedProduct && this.selectedProduct.id !== undefined) {
      const p = this.model.getProductsById(this.selectedProduct.id);
      if (p) {
        p.name = this.selectedProduct.name;
        p.description = this.selectedProduct.description;
        p.imageUrl = this.selectedProduct.imageUrl;
        this.selectedProduct = null;
      } else {
        console.error('Product not found');
      }
    } else {
      console.error('Selected product or product ID is undefined');
    }
  }
}
