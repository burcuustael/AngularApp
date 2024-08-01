import { Component } from '@angular/core';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'admin-products',
  templateUrl: './admin-products.component.html',
  styleUrl: './admin-products.component.css',
})
export class AdminProductsComponent {
  selectedProduct: string | null | undefined = null;
  products;
  model: ProductRepository;

  constructor() {
    this.model = new ProductRepository();
    this.products = this.model.getProducts();
  }
}
