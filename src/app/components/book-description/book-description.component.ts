import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {IBook} from "../../models/models";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.css']
})
export class BookDescriptionComponent implements OnInit, OnDestroy {
  activeBook: IBook = null;
  private ngUnsubscribe: Subject<void> = new Subject();

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.activeBook$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(book => this.activeBook = book)
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
