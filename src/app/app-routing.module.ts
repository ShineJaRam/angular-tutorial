import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { UserComponent } from './user/user.component';
import { AnimalComponent } from './animal/animal.component';
import { MarvelComponent } from './marvel/marvel.component';
import { AuthGuard } from './auth/auth.guard';
import { HeroResolve } from './resolve/hero.resolve';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: {
      hero: HeroResolve,
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
