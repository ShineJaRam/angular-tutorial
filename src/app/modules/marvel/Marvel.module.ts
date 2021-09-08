import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarvelComponent } from './component/marvel.component';

const COMPONENTS = [MarvelComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
})
export class MarvelModule {}
