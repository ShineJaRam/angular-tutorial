import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroSearchComponent } from './component/hero-search.component';

const COMPONENTS = [HeroSearchComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
})
export class HeroSearchModule {}
