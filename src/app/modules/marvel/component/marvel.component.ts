import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MarvelHero, RootState } from 'src/mockup';
import { chooseHero, fetchHeroes } from '../../../store/marvel/marvel.action';
import {
  selectMarvelHeroes,
  tmpSelector,
} from '../../../store/marvel/marvel.selector';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css'],
})
export class MarvelComponent implements OnInit {
  marvelHeroes$: Observable<MarvelHero[]>;
  tmpHero: Observable<string>;

  constructor(private store: Store<RootState>) {
    this.marvelHeroes$ = this.store.select(selectMarvelHeroes);
    this.marvelHeroes$.subscribe(hero => {
      console.log(hero);
    });
    this.tmpHero = this.store.select(tmpSelector);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchHeroes());
    this.tmpHero.subscribe(console.log);
  }

  selectHero(value: string) {
    this.store.dispatch(chooseHero({ getHero: value }));
  }
}
