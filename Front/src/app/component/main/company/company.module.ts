import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyRoutes } from './company.routing';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutes
  ],
  declarations: [CompanyComponent]
})
export class CompanyModule { }
