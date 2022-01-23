import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBook} from "../../models/models";

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  @Input() books: Array<IBook> = [];
  @Output() bookClick: EventEmitter<IBook> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
