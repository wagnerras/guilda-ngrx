import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';
import { Book } from '../book-list/books.model';

export const selectFeatureBooks = (feature) => feature.books;

export const selectBooks = createSelector(
  selectFeatureBooks,
  (state: AppState): ReadonlyArray<Book> => state.booksList
);

export const selectCollection = createSelector(
  selectFeatureBooks,
  (state: AppState): ReadonlyArray<Book> => state.collection
);


























export const selectBookCollection = createSelector(
  selectBooks,
  selectCollection,
  (books: Array<Book>, collection: Array<Book>) => {
    let bookList = [];
    collection.forEach((item) => {
      const book = books.find((book) => book.id === item.id);
      book && bookList.push(book.volumeInfo.title);
    })
    return bookList;
  }
); 
