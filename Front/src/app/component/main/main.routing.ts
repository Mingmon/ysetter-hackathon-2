import { EmployeeModule } from './employee/employee.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { CompanyModule } from './company/company.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'employee',
        loadChildren: () => EmployeeModule
      },
      {
        path: 'company',
        loadChildren: () => CompanyModule
      }
    ]
  },
];

export const MainRoutes = RouterModule.forChild(routes);