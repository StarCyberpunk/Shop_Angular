import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPrRoutingModule } from './list-pr-routing.module';
import { ListPrComponent } from './list-pr.component';


@NgModule({
  declarations: [
    ListPrComponent
  ],
  imports: [
    CommonModule,
    ListPrRoutingModule,
  ]
})
export class ListPrModule { }
