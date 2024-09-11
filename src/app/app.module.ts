import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { InventoryAppComponent } from './inventory-app/inventory-app.component';
import { ProductsListComponent } from './inventory-app/products-list/products-list.component';
import { ProductRowComponent } from './inventory-app/product-row/product-row.component';
import { ProductImageComponent } from './inventory-app/product-image/product-image.component';
import { ProductDepartmentComponent } from './inventory-app/product-department/product-department.component';
import { ProductDisplayComponent } from './inventory-app/product-display/product-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    InventoryAppComponent,
    ProductsListComponent,
    ProductRowComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    ProductDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
