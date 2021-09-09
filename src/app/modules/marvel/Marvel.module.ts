import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarvelComponent } from './component/marvel.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [MarvelComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: MarvelComponent,
      },
    ]),
  ],
})
export class MarvelModule {}
