import {Component, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../models/product";
import {ProductsService} from "../../../core/services/products.service";
import {Observable} from "rxjs";
@Component({
  selector: 'app-list-pr',
  templateUrl: './list-pr.component.html',
  styleUrls: ['./list-pr.component.css']
})
export class ListPrComponent implements OnInit {
   products:Observable<IProduct[]>
  constructor(private prodSer:ProductsService) {}
  ngOnInit(): void {this.products=this.prodSer.getAll()}
}
