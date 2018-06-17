import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MainRoutes } from './main.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardModule,
    MainRoutes,
    SharedModule
  ],
  declarations: [
    MainComponent,
    DashboardComponent
  ]
})
export class MainModule { }
