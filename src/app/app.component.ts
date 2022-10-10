import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCollection, selectBooks, selectBookCollection } from './state/books.selectors';
import {
  addBook,
  removeBook,
  getBooksApi,
} from './state/books.actions';
import { Book } from './book-list/books.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectCollection);
  alreadyHave$ = this.store.select(selectBookCollection);
  search = '';

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(getBooksApi({ query: '' }));
  }

  onAdd(book: Book): void {
    this.store.dispatch(addBook({ book }));
  }

  onRemove(bookId: string): void {
    this.store.dispatch(removeBook({ bookId }));
  }

  getBooks(search): void {
    this.store.dispatch(getBooksApi({ query: search }));
  }

}
