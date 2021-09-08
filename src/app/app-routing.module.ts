import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HeroesComponent } from './modules/heroes/heroes.component';
import { HeroDetailComponent } from './modules/hero-detail/hero-detail.component';
import { UserComponent } from './modules/user/user.component';
import { AnimalComponent } from './modules/animal/animal.component';
import { MarvelComponent } from './modules/marvel/marvel.component';
import { AuthGuard } from './modules/auth/auth.guard';
import { DashboardHeroResolve } from './resolve/hero.resolve';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {
      hero: DashboardHeroResolve,
    },
  },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'users', component: UserComponent },
  { path: 'animal', component: AnimalComponent, canActivate: [AuthGuard] },
  { path: 'marvel', component: MarvelComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
