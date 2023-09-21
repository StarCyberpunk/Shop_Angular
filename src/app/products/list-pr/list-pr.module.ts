import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPrRoutingModule } from './list-pr-routing.module';
import { ListPrComponent } from './list-pr.component';
import {ProductsModule} from "../products.module";


@NgModule({
  declarations: [
    ListPrComponent
  ],
  imports: [
    CommonModule,
    ListPrRoutingModule,
    ProductsModule
  ]
})
export class ListPrModule { }
