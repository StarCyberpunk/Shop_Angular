import {Component, OnInit} from '@angular/core';
import {products} from "../data/products";
import {IProduct} from "../models/product";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-list-pr',
  templateUrl: './list-pr.component.html',
  styleUrls: ['./list-pr.component.css']
})
export class ListPrComponent implements OnInit {

   products:IProduct[] = []
  constructor(private prodSer:ProductsService) {
  }

  ngOnInit(): void {
     this.prodSer.getAll().subscribe(products=>{
       this.products=products
     })
  }

}
