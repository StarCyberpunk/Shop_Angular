import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../../features/models/product";
import {ICart} from "../../features/models/cart";


@Injectable(
  {
    providedIn:'root'
  })
export class CartService{

   cart:ICart
  constructor() {this.cart={products:new Array<IProduct>()}}
  addProduct(product:Observable<IProduct>){
    window.alert('Your product has been added to the cart!');
    this.cart.products.push()
    product.subscribe(m=>this.cart.products.push(m))
  }
  delProduct(product:IProduct){
     this.cart.products.splice(0,1,product)
  }
}
