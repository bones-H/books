import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IBook, ICategory} from "../../../models/models";

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input() category: ICategory = null;
  @Output() activeBook: EventEmitter<IBook>  = new EventEmitter();
  hidden = false;

  constructor() { }

  ngOnInit(): void {
  }

  hideCateggory() {
    this.hidden = !this.hidden
  }

  activateBook(book: IBook) {
    this.activeBook.emit(book)
  }
}
