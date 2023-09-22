import {Component, Input} from '@angular/core';
import {CartService} from "../services/cart.service";
import {ProductsService} from "../services/products.service";
import {IProduct} from "../products/models/product";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  item:number[]
  cart:IProduct[]
  constructor(CartService:CartService,ProductSer:ProductsService) {
    this.item=CartService.getCart()
    for (let el of this.item) {
      ProductSer.getSingle(el).subscribe(p=>{this.cart.push(p)})

    }
  }

}
