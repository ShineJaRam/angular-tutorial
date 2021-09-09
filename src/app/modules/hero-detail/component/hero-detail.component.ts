import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../../../services/hero/hero.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import {
  increment,
  decrement,
  reset,
} from '../../../store/counter/counter.actions';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  hero?: Hero;
  count$: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const params =
      this.route.snapshot.paramMap.get('id') === null
        ? 11
        : this.route.snapshot.paramMap.get('id');
    const id = Number(params);
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  onChangeName(value: string): void {
    this.hero.name = value;
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
