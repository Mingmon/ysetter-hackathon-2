import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { ShowDashboardComponent } from './show-dashboard/show-dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,

  ],
  declarations: [MyDashboardComponent,
    ShowDashboardComponent
],
  exports: [MyDashboardComponent]
})
export class DashboardModule {  }
