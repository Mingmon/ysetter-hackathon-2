import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutes } from './employee.routing';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutes
  ],
  declarations: [EmployeeComponent,
    ShowEmployeeComponent,
    CreateEmployeeComponent
]
})
export class EmployeeModule { }
