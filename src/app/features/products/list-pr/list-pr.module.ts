import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPrRoutingModule } from './list-pr-routing.module';
import { ListPrComponent } from './list-pr.component';
import {ProductAboutComponent} from "../product-about/product-about.component";


@NgModule({
  declarations: [
    ListPrComponent,
    ProductAboutComponent
  ],
  imports: [
    CommonModule,
    ListPrRoutingModule,
  ]
})
export class ListPrModule { }
