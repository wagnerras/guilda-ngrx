import { createReducer, on } from '@ngrx/store';
import { initialState } from './app.state';
import { retrievedBookList, removeBook, addBook, clean } from './books.actions';

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { booksList }) => {
    return { ...state, booksList };
  }),
  on(removeBook, (state, { bookId }) => {
    const collection = [...state.collection.filter(item => item.id !== bookId)];
    return { ...state, collection };
  }),
  on(addBook, (state, { book }) => {
    const exists = state.collection.some(item => item.id === book.id);
    if (exists) { return state };
    const collection = [...state.collection, book];
    return { ...state, collection };
  }),
  on(clean, (state) => {
    return { ...state, collection: [] };
  }),
);
