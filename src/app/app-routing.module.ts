import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
const routes: Routes = [
  { path: 'cart', loadChildren: () => import('./features/orders/orders.module').then((m) => m.OrdersModule) },
  { path: '', loadChildren: () => import('./features/products/list-pr/list-pr.module').then(m => m.ListPrModule) },

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
