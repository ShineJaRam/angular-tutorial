import { Title } from '@angular/platform-browser';
import { SelectedAnimal } from './app/store/animal/animal.reducer';
import { selectedHeroes } from './app/store/marvel/marvel.reducer';

export interface RootState {
  counter: number;
  user: Title;
  animal: SelectedAnimal;
  marvel: selectedHeroes;
}

export interface Item {
  key: string;
  title: string;
}

export const items: Item[] = [
  { key: 'item1', title: 'item1' },
  { key: 'item2', title: 'item2' },
];

export interface Animal {
  id: number;
  name: string;
}

export const animals: Animal[] = [
  {
    id: 1,
    name: 'dog',
  },
  {
    id: 2,
    name: 'cat',
  },
  {
    id: 3,
    name: 'bird',
  },
];

export interface MarvelHero {
  id: number;
  name: string;
  power: string;
}

export const marvelHeroes: MarvelHero[] = [
  {
    id: 1,
    name: 'Iron Man',
    power: 'Intelligence',
  },
  {
    id: 2,
    name: 'Captain America',
    power: 'Physical',
  },
  {
    id: 3,
    name: 'Thor',
    power: 'Thunder',
  },
];
