import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../models/product";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {products} from "../data/products";
import {HttpClientModule} from "@angular/common/http";
import {ProductsService} from "../../services/products.service";
import {CartService} from "../../services/cart.service";


@Component({
  selector: 'app-product-about',
  templateUrl: './product-about.component.html',
  styleUrls: ['./product-about.component.css']
})
export class ProductAboutComponent implements OnInit {
  id: number
  product:IProduct
  constructor(private route: ActivatedRoute,private productsService:ProductsService,private cartServices:CartService) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(<string>params.get('id'))

    })
    this.productsService.getSingle(this.id).subscribe(p=>{
      this.product=p
    })
  }
  add(id:number){
    this.cartServices.addProduct(id)
  }

}
