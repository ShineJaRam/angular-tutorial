import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimalComponent } from './component/animal.component';

const COMPONENTS = [AnimalComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
})
export class AnimalModule {}
