import { Component, OnInit } from '@angular/core';

const activeStyle = {
  color: 'black',
  'background-color': 'yellow',
};
const defaultStyle = {
  color: 'white',
  'background-color': 'darkgray',
};

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
})
export class DirectiveComponent implements OnInit {
  currentClasses: Record<string, boolean> = {};
  currentStyled = {
    fire: {
      style: defaultStyle,
    },
    water: {
      style: defaultStyle,
    },
    wind: {
      style: defaultStyle,
    },
  };
  selectedColor = '';

  constructor() {}

  ngOnInit(): void {
    this.currentClasses = {
      fire: false,
      water: false,
      wind: false,
    };
  }

  changeClasses(type: string) {
    this.currentClasses = {
      ...this.currentClasses,
      [type]: !this.currentClasses[type],
    };
  }

  changeStyled(type: string) {
    this.currentStyled = {
      ...this.currentStyled,
      [type]: this.currentClasses[type] ? activeStyle : defaultStyle,
    };
  }
}
