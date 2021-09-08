import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { userReducer } from './store/user/user.reducer';
import { UserComponent } from './user/user.component';
import { AnimalComponent } from './animal/animal.component';
import { animalReducer } from './store/animal/animal.reducer';
import { MarvelComponent } from './marvel/marvel.component';
import { marvelHeroReducer } from './store/marvel/marvel.reducer';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    UserComponent,
    AnimalComponent,
    MarvelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    StoreModule.forRoot({
      count: counterReducer,
      user: userReducer,
      animal: animalReducer,
      marvel: marvelHeroReducer,
    }),
    StoreDevtoolsModule.instrument({
      name: '앵귤러 튜토리얼',
      maxAge: 5,
      logOnly: environment.production,
      autoPause: true,
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent],
})
export class AppModule {}
