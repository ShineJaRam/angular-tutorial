import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimalComponent } from './component/animal.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [AnimalComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AnimalComponent,
      },
    ]),
  ],
})
export class AnimalModule {}
