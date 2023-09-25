import { NgModule } from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
const routes: Routes = [
  /*{
    path: '',
    loadChildren: () => import('./app.module').then((m)  => m.AppModule)
  },*/
  { path: 'cart', loadChildren: () => import('./features/orders/orders.module').then((m) => m.OrdersModule) },
  { path: '', loadChildren: () => import('./features/products/list-pr/list-pr.module').then(m => m.ListPrModule) },
  { path: 'about/:id', loadChildren: () => import('./features/products/product-about/product-about.module').then(m => m.ProductAboutModule) },

];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
