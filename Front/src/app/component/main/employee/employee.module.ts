import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeRoutes } from './employee.routing';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRoutes
  ],
  declarations: [EmployeeComponent,
    ShowEmployeeComponent
]
})
export class EmployeeModule { }
