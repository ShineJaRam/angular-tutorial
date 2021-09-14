import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { RouterModule } from '@angular/router';
import { DashboardHeroResolve } from '../../resolve/hero.resolve';

const COMPONENTS = [DashboardComponent, HeroSearchComponent];

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
        resolve: {
          hero: DashboardHeroResolve,
        },
      },
    ]),
  ],
})
export class DashboardModule {}
