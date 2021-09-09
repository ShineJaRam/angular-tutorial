import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './component/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const COMPONENTS = [HeroDetailComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HeroDetailComponent,
      },
    ]),
  ],
})
export class HeroDetailModule {}
