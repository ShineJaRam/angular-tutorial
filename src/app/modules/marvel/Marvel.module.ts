import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarvelComponent } from './component/marvel.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';

const COMPONENTS = [MarvelComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MarvelComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
})
export class MarvelModule {}
