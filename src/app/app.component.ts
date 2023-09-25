import { Component } from '@angular/core';
import {IProduct} from "./features/products/models/product";
import {products as data} from "./features/products/data/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Shop';
  basket:IProduct[]= []
}
