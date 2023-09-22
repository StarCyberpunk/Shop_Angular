import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProduct} from "../products/models/product";


@Injectable(
  {
    providedIn:'root'
  })
export class CartService{
   cart_id_mas:number[]=[]
  constructor() {
  }
  addProduct(id:number){
    this.cart_id_mas.push(id)
  }
  getCart():number[]{
    return  this.cart_id_mas
  }

}
