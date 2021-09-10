import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ReactiveFormComponent, TemplateDrivenFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'reactive',
        component: ReactiveFormComponent,
      },
      {
        path: 'template',
        component: TemplateDrivenFormComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class FormModule {}
