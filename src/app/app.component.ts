import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { selectBookCollection, selectBooks } from './state/books.selectors';
import {
  addBook,
  removeBook,
  getBooksApi,
} from './state/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));
  search = '';

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getBooksApi({query: ''}));
  }

  onAdd(bookId: string): void {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string): void {
    this.store.dispatch(removeBook({ bookId }));
  }

  searched(search): void {
    this.store.dispatch(getBooksApi({query: search}));
  }
}
