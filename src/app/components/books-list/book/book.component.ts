import {Component, Input, OnInit} from '@angular/core';
import {IBook} from "../../../models/models";

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: IBook = null;

  constructor() { }

  ngOnInit(): void {
  }

}
