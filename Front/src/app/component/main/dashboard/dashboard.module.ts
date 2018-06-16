import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';


@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,

  ],
  declarations: [MyDashboardComponent
],
  exports: [MyDashboardComponent]
})
export class DashboardModule {  }
