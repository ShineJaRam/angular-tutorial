import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipeComponent } from './component/pipe.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SquaredNumberPipe } from './squared.pipe';

const COMPONENTS = [PipeComponent];

@NgModule({
  declarations: [...COMPONENTS, SquaredNumberPipe],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PipeComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PipeModule {}
