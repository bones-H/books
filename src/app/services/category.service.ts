import { Injectable } from '@angular/core';
import {IBook, ICategory} from "../models/models";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryList: Array<ICategory> = [
    {
      id: 1,
      name: 'detective',
      books: [
        {
          name: 'Sherlock',
          author: 'Doyle',
          description: 'Tru detective',
          categoryId: 1,
        },
        {
          name: 'Sherlock 2',
          author: 'Doyle',
          description: 'best seller !!!',
          categoryId: 1,
        },
        {
          name: 'Sherlock 3',
          author: 'Doyle',
          description: 'best seller !!!',
          categoryId: 1,
        },
        {
          name: 'Sherlock 4',
          author: 'Doyle',
          description: 'epic final',
          categoryId: 1,
        }
      ],
      category:     {
        id: 2,
        name: 'detective 18+',
        books: [
          {
            name: 'Murder on the Links',
            author: 'Agatha',
            description: 'Tru detective',
            categoryId: 1,
          },
          {
            name: 'Poirot Investigates',
            author: 'Agatha',
            description: 'best seller !!!',
            categoryId: 1,
          },
          {
            name: 'Murder of Roger Ackroyd',
            author: 'Agatha',
            description: 'best seller !!!',
            categoryId: 1,
          },
          {
            name: 'Peril at End House',
            author: 'Agatha',
            description: 'epic final',
            categoryId: 1,
          }
        ],
      }

    },
    {
      id: 3,
      name: 'novel',
      books: [
        {
          name: 'book1',
          author: 'author',
          description: 'Tru detective',
          categoryId: 1,
        },
        {
          name: 'book2',
          author: 'author',
          description: 'best seller !!!',
          categoryId: 1,
        },
        {
          name: 'book3',
          author: 'author',
          description: 'best seller !!!',
          categoryId: 1,
        },
      ],
      category:     {
        id: 4,
        name: 'novel 18+',
        books: [
          {
            name: 'book1',
            author: 'author',
            description: 'Tru detective',
            categoryId: 1,
          },
          {
            name: 'book2',
            author: 'author',
            description: 'best seller !!!',
            categoryId: 1,
          },
          {
            name: 'book3',
            author: 'author',
            description: 'best seller !!!',
            categoryId: 1,
          },
        ],
      }

    },
  ];
  filteredList$ = new Subject<Array<ICategory>>();
  activeBook$ = new Subject<IBook>();


  constructor() {
    this.filteredList$.next(this.categoryList)
  }
}
