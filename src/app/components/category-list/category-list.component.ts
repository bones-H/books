import { Component, OnInit } from '@angular/core';
import {IBook, ICategory} from "../../models/models";
import {Subject, takeUntil} from "rxjs";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Array<ICategory> = [];
  private ngUnsubscribe = new Subject<void>();

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categories = this.categoryService.categoryList
  }

  activateBook(book: IBook){
    this.categoryService.activeBook$.next(book)
  }
}
