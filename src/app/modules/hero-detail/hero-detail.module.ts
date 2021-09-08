import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './component/hero-detail.component';

const COMPONRNTS = [HeroDetailComponent];

@NgModule({
  declarations: COMPONRNTS,
  imports: [CommonModule],
})
export class HeroDetailModule {}
