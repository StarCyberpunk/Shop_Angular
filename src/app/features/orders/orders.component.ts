import {Component, Input} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {ProductsService} from "../../core/services/products.service";
import {IProduct} from "../models/product";
import {ICart} from "../models/cart";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  item:ICart
  cart:IProduct[]
  constructor(cartService:CartService,productSer:ProductsService) {
    this.cart=cartService.cart.products
  }

}
