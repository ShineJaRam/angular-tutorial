import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from 'src/mockup';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users$: Observable<Item[]>;
  users: Item[] = [];

  constructor(private store: Store<{ user: Item[] }>) {
    this.users$ = this.store.select('user');

    this.users$.subscribe(users => {
      console.log(users);
      return (this.users = [...users]);
    });
  }

  ngOnInit(): void {}
}
