import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';

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
    }
  ] },
];

export const EmployeeRoutes = RouterModule.forChild(routes);
