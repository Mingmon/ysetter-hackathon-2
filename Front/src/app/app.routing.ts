import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MainComponent } from './component/main/main.component';
import { MainModule } from './component/main/main.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: 'main',
    loadChildren: () => MainModule,
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
