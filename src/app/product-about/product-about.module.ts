import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductAboutRoutingModule } from './product-about-routing.module';
import { ProductAboutComponent } from './product-about.component';
import {ActivatedRoute} from "@angular/router";


@NgModule({
  declarations: [
    ProductAboutComponent
  ],
  imports: [
    CommonModule,
    ProductAboutRoutingModule
  ]
})
export class ProductAboutModule {

}
