import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {ProductsService} from "../../../core/services/products.service";
import {CartService} from "../../../core/services/cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: number
  product$:Observable<IProduct>
  constructor(private route: ActivatedRoute,private productsService:ProductsService,private cartServices:CartService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {this.id = parseInt(<string>params.get('id'))}).unsubscribe()
    this.product$=this.productsService.getSingle(this.id)
  }
  add(){
    this.cartServices.addProduct(this.product$)
  }

}
