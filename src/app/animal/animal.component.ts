import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Animal, RootState } from 'src/mockup';
import { chooseAnimal, fetchAnimals } from '../store/animal/animal.action';
import { selectAnimals, tmpSelector } from '../store/animal/animal.selector';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {
  animals$: Observable<Animal[]>;
  tmpAnimal: Observable<string>;

  constructor(private store: Store<RootState>) {
    this.animals$ = this.store.select(selectAnimals);
    this.animals$.subscribe(animal => {
      console.log(animal);
    });

    this.tmpAnimal = this.store.select(tmpSelector);
  }

  ngOnInit(): void {
    this.store.dispatch(fetchAnimals());
    this.tmpAnimal.subscribe(console.log);
  }

  selectAnimal(target: string) {
    this.store.dispatch(chooseAnimal({ getValue: target }));
  }
}
