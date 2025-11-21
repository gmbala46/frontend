import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Studentlist } from './studentlist/studentlist';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Studentdetails } from './studentdetails/studentdetails';

@NgModule({
  declarations: [
    App,
    Home,
    Studentlist,
    Studentdetails
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
