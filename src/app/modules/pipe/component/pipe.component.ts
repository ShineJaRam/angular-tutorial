import { Component, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeKo from '@angular/common/locales/ko';
import { FormControl } from '@angular/forms';
import { Hero } from '../../../hero';
import { HEROES } from '../../../mock-heros';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
})
export class PipeComponent implements OnInit {
  birthDay = new Date(1991, 6, 19);
  toggle = true;
  decimalFormControl = new FormControl();
  defaultNumber = new FormControl();
  degreeOfSquare = new FormControl();
  heroes: Hero[] = HEROES;

  constructor() {}

  ngOnInit(): void {}

  get dateFormat() {
    return this.toggle ? 'yy.MM.dd' : 'fullDate';
  }

  toggleFormat() {
    this.toggle = !this.toggle;
  }
}
