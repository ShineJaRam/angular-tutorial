import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserComponent } from './component/user.component';

const COMPONENTS = [UserComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule],
})
export class UserModule {}
