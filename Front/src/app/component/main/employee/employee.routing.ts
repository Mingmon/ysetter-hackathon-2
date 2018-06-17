import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const routes: Routes = [
  { path: '',
  component: EmployeeComponent,
  children: [
    {
      path: '',
      redirectTo: 'show',
      pathMatch: 'full'
    },
    {
      path: 'show',
      component: ShowEmployeeComponent
    },
    {
      path: 'create',
      component: CreateEmployeeComponent
    }
  ] },
];

export const EmployeeRoutes = RouterModule.forChild(routes);
