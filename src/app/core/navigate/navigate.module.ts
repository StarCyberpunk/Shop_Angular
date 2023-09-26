import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from './nav-item/nav-item.component';
import {RouterLink} from "@angular/router";
@NgModule({
  declarations: [NavItemComponent],
  exports: [NavItemComponent],
  imports: [CommonModule, RouterLink]})
export class NavigateModule { }
