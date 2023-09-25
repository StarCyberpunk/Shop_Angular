import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPrComponent } from './list-pr.component';

const routes: Routes = [{ path: '', component: ListPrComponent },
  { path: 'item/:id', component: ListPrComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListPrRoutingModule { }
