import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserComponent } from './component/user.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [UserComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
      },
    ]),
  ],
})
export class UserModule {}
