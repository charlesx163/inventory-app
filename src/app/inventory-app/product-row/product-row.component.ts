import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrl: './product-row.component.css',
  inputs:['product']
})
export class ProductRowComponent {
  product!: Product;
  constructor(){
    
  }
}
