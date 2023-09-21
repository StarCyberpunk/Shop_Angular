import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../products/models/product";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {products} from "../products/data/products";


@Component({
  selector: 'app-product-about',
  templateUrl: './product-about.component.html',
  styleUrls: ['./product-about.component.css']
})
export class ProductAboutComponent implements OnInit {
  id: number
  product:IProduct
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(<string>params.get('id'))
      this.product=products[this.id-1]
    })
  }

}
