import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyRoutes } from './company.routing';
import { CreateCompanyComponent } from './create-company/create-company.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutes
  ],
  declarations: [CompanyComponent,
    CreateCompanyComponent
],
  exports:[
    CreateCompanyComponent
  ]
})
export class CompanyModule { }
