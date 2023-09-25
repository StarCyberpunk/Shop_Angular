import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPrComponent } from './list-pr.component';
import {ProductAboutComponent} from "../product-about/product-about.component";

const routes: Routes = [{ path: '', component: ListPrComponent },
  { path: 'about/:id', component: ProductAboutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPrRoutingModule { }
