import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProguctItemComponent } from './proguct-item/proguct-item.component';



@NgModule({
    declarations: [
        ProguctItemComponent
    ],
    exports: [
        ProguctItemComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ProductsModule { }
