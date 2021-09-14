import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hero } from '../../../hero';
import { HeroService } from '../../../services/hero/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  @ViewChild('heroName') heroName: ElementRef<HTMLInputElement>;

  constructor(
    private heroService: HeroService,
    private heroNameElement: ElementRef<HTMLInputElement>
  ) {
    this.heroName = heroNameElement;
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  add(name: string): void {
    if (!name) {
      return;
    }
    this.heroService.addHero({ name }).subscribe(hero => {
      this.heroes.push(hero);
    });
    this.heroName.nativeElement.value = '';
  }

  delete(selectedHero: Hero): void {
    this.heroes = this.heroes.filter(hero => hero !== selectedHero);
    this.heroService.deleteHero(selectedHero.id).subscribe();
  }
}
