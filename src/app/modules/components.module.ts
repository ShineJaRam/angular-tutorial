import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardHeroResolve } from '../resolve/hero.resolve';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'animal',
        loadChildren: () =>
          import('./animal/animal.module').then(m => m.AnimalModule),
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'detail/:id',
        loadChildren: () =>
          import('./hero-detail/hero-detail.module').then(
            m => m.HeroDetailModule
          ),
      },
      {
        path: 'heroes',
        loadChildren: () =>
          import('./heroes/heroes.module').then(m => m.HeroesModule),
      },
      {
        path: 'marvel',
        loadChildren: () =>
          import('./marvel/marvel.module').then(m => m.MarvelModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./user/user.module').then(m => m.UserModule),
      },
      {
        path: 'form',
        loadChildren: () =>
          import('./form/components/form.module').then(m => m.FormModule),
      },
      {
        path: 'directive',
        loadChildren: () =>
          import('./directive/directive.module').then(m => m.DirectiveModule),
      },
    ]),
  ],
  providers: [],
})
export class ComponentsModule {}
