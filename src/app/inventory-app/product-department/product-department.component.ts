import { Component } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrl: './product-department.component.css',
  inputs: ['product']
})
export class ProductDepartmentComponent {
  product!: Product;
  constructor(){

  }
}
