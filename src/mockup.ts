import { Title } from '@angular/platform-browser';
import { SelectedAnimal } from './app/store/animal/animal.reducer';

export const items: Item[] = [
  { key: 'item1', title: 'item1' },
  { key: 'item2', title: 'item2' },
];

export interface Item {
  key: string;
  title: string;
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

export interface Animal {
  id: number;
  name: string;
}

export interface RootState {
  counter: number;
  user: Title;
  animal: SelectedAnimal;
}
