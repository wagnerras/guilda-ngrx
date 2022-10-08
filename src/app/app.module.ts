import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { booksReducer as books } from './state/books.reducer';
import { StoreModule } from '@ngrx/store';
import { BookListComponent } from './book-list/book-list.component';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './effects/books.effects';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ books }),
    EffectsModule.forRoot([BookEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
