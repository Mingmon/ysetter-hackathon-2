import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,

  ],
  declarations: [MyDashboardComponent],
  exports: [MyDashboardComponent]
})
export class DashboardModule {  }
