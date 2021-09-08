import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MarvelHero, RootState } from 'src/mockup';
import { chooseHero, fetchHeroes } from '../store/marvel/marvel.action';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css'],
})
export class MarvelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
