import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrRoutingModule } from './list-pr-routing.module';
import { ListPrComponent } from './list-pr.component';
import {ProductDetailsComponent} from "../product-details/product-details.component";

@NgModule({
  declarations: [ListPrComponent, ProductDetailsComponent],
  imports: [CommonModule, ListPrRoutingModule,]})
export class ListPrModule { }
