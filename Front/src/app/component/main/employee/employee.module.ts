import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutes } from './employee.routing';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutes
  ],
  declarations: [EmployeeComponent]
})
export class EmployeeModule { }
