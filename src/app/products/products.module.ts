import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import {RouterLink} from "@angular/router";



@NgModule({
    declarations: [
        ProductItemComponent
    ],
    exports: [
        ProductItemComponent
    ],
    imports: [
        CommonModule,
        RouterLink
    ]
})
export class ProductsModule { }
