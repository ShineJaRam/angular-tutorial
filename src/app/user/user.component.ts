import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from 'src/mockup';
import { fetchUsers } from '../store/user/user.actions';
import { selectUsers, Title } from '../store/user/user.reducer';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  users$: Observable<Item[]>;
  users: Item[] = [];

  constructor(private store: Store<{ counter: number; user: Title }>) {
    this.users$ = this.store.select(selectUsers);

    this.users$.subscribe(users => {
      console.log(users);
      return (this.users = [...users]);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fetchUsers());
  }
}
