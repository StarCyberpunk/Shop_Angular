import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../models/product";
import {ProductsService} from "../../../core/services/products.service";
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
