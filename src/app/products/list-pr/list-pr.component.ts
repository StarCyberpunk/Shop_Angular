import { Component } from '@angular/core';
import {products} from "../data/products";

@Component({
  selector: 'app-list-pr',
  templateUrl: './list-pr.component.html',
  styleUrls: ['./list-pr.component.css']
})
export class ListPrComponent {

  protected readonly products = products;
}
