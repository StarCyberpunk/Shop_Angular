import { Component } from '@angular/core';
import {IProduct} from "./products/models/product";
import {products as data} from "./products/data/products";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Shop';
  basket:IProduct[]= []
}
