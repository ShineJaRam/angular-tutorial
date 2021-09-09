import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/auth.guard';
import { DashboardHeroResolve } from './resolve/hero.resolve';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/components.module').then(m => m.ComponentsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
