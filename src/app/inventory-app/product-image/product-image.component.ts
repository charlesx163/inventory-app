import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'product-image',
  templateUrl: './product-image.component.html',
  styleUrl: './product-image.component.css',
  inputs: ['product']
})
export class ProductImageComponent {
  product!: Product;
}
