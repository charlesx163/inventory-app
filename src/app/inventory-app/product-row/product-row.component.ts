import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrl: './product-row.component.css',
  inputs:['product'],
  host:{'class': 'item'}
})
export class ProductRowComponent {
  product!: Product;
  constructor(){
    
  }
}
