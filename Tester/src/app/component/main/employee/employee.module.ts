import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutes } from './employee.routing';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutes
  ],
  declarations: [EmployeeComponent,
    CreateEmployeeComponent
]
})
export class EmployeeModule { }
