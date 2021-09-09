import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './component/heroes.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [HeroesComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeroesComponent,
      },
    ]),
  ],
})
export class HeroesModule {}
