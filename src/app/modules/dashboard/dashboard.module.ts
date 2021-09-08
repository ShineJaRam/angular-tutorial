import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './component/dashboard.component';

const COMPONENTS = [DashboardComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
})
export class DashboardModule {}
