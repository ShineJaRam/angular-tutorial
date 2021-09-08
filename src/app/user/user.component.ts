import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from 'src/mockup';
import { fetchUsers } from '../store/user/user.actions';
import { User } from '../store/user/user.reducer';
import { selectUsers } from '../store/user/user.selector';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users$: Observable<Item[]>;
  users: Item[] = [];

  constructor(private store: Store<{ counter: number; user: User }>) {
    this.users$ = this.store.select(selectUsers);

    this.users$.subscribe(users => {
      console.log(users);
      this.users = [...users];
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fetchUsers());
  }
}
