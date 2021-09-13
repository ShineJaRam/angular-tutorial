import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DirectiveComponent } from './directive/directive.component';
import { HighlightDirective } from './highlight.directive';

const COMPONENTS = [DirectiveComponent];

@NgModule({
  declarations: [...COMPONENTS, HighlightDirective],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DirectiveComponent,
      },
    ]),
  ],
})
export class DirectiveModule {}
