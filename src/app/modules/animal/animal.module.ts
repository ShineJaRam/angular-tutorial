import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimalComponent } from './component/animal.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

const COMPONENTS = [AnimalComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AnimalComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
})
export class AnimalModule {}
