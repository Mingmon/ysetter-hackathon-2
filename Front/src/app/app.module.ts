import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
],
  imports: [
    AppRoutes,
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
