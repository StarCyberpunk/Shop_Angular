import {Component, Input} from '@angular/core';
import {CartService} from "../../core/services/cart.service";
import {IProduct} from "../models/product";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  total:number=0
  cart:Array<IProduct>
  cartService:CartService
  constructor(cartService:CartService) {this.cartService=cartService;this.cart=cartService.cart.products}
  ngOnInit():void{this.cart.map(m=>this.total+= m.price)}
  delProduct(i:number){this.cartService.delProduct(i)}}
