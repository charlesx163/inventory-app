import { Component } from '@angular/core';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrl: './product-display.component.css',
  inputs:['price']
})
export class ProductDisplayComponent {
  price!: number;
  constructor(){

  }
}
