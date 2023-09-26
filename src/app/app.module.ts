import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NavigateModule} from "./core/navigate/navigate.module";
import {HttpClientModule} from "@angular/common/http";

@NgModule({declarations: [AppComponent],imports: [BrowserModule, AppRoutingModule, NavigateModule, HttpClientModule], providers: [], bootstrap: [AppComponent]})
export class AppModule { }
