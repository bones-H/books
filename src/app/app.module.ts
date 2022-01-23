import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { CategoryComponent } from './components/category-list/category/category.component';
import {CategoryService} from "./services/category.service";
import { CategoryListComponent } from './components/category-list/category-list.component';
import { BookComponent } from './components/books-list/book/book.component';
import { BookDescriptionComponent } from './components/book-description/book-description.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    CategoryComponent,
    CategoryListComponent,
    BookComponent,
    BookDescriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
