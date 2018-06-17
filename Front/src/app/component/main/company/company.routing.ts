import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { ShowCompanyComponent } from './show-company/show-company.component';

const routes: Routes = [
  { path: '',
  component: CompanyComponent,
  children: [
    {
      path: '',
      redirectTo: 'create',
      pathMatch: 'full'
    },
    {
      path: 'create',
      component: CreateCompanyComponent
    },
    {
      path: 'show',
      component: ShowCompanyComponent
    }
  ]
}
  
];

export const CompanyRoutes = RouterModule.forChild(routes);
