import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPrComponent } from './list-pr.component';
import {ProductDetailsComponent} from "../product-details/product-details.component";

const routes: Routes = [{ path: '', component: ListPrComponent }, { path: 'about/:id', component: ProductDetailsComponent }];
@NgModule({imports: [RouterModule.forChild(routes)], exports: [RouterModule]})
export class ListPrRoutingModule { }
