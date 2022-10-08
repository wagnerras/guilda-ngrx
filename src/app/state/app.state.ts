import { Book } from '../book-list/books.model';

export interface AppState {
  booksList: ReadonlyArray<Book>;
  collection: ReadonlyArray<Book>;
}

export const initialState = {
  booksList: [],
  collection: [],
};

