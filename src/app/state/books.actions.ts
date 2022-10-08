import { createAction, props } from '@ngrx/store';
import { Book } from '../book-list/books.model';

export const addBook = createAction(
  '[Book List] Add Book',
  props<{ book: Book }>()
);

export const removeBook = createAction(
  '[Book Collection] Remove Book',
  props<{ bookId: string }>()
);

export const retrievedBookList = createAction(
  '[Book List/API] Retrieve Books Success',
  props<{ booksList }>()
);

export const getBooksApi = createAction('[book effects]',
  props<{ query }>()
);


