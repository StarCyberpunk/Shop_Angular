import {Injectable} from "@angular/core";
import {IProduct} from "../../features/models/product";
import {ICart} from "../../features/models/cart";
@Injectable({providedIn:'root'})
export class CartService{
   cart:ICart
  constructor() {this.cart={products:new Array<IProduct>() }}
  addProduct(product:IProduct){window.alert('Добавлено в корзину');this.cart.products.push(product)}
  delProduct(i:number){this.cart.products.splice(i,1)}}
