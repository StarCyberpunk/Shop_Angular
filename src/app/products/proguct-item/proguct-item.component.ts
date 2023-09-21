import {Component, Input} from '@angular/core';
import {IProduct} from "../../models/product";

@Component({
  selector: 'app-proguct-item',
  templateUrl: './proguct-item.component.html',
  styleUrls: ['./proguct-item.component.css']
})
export class ProguctItemComponent {
  @Input() product: IProduct
}
