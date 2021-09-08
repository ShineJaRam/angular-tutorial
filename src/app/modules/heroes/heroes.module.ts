import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './component/heroes.component';

const COMPONENTS = [HeroesComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
})
export class HeroesModule {}
