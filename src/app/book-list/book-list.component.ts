import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './books.model';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html'
})
export class BookListComponent {
  @Input() title = '';
  @Input() books: Array<Book>;
  @Input() addType = true;
  @Output() add = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() {}

}
