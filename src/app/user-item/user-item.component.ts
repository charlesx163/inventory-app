import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit {
@Input() name : string
 constructor()
 {
  this.name = ''
 }
 ngOnInit(): void {
   
 }
}
