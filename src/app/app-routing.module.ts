import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
const routes: Routes = [
  /*{
    path: '',
    loadChildren: () => import('./app.module').then((m)  => m.AppModule)
  },*/
  { path: 'cart', loadChildren: () => import('./orders/orders.module').then((m) => m.OrdersModule) },
  { path: 'shop', loadChildren: () => import('./products/list-pr/list-pr.module').then(m => m.ListPrModule) },

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
