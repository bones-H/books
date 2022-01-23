import {Component, OnInit} from '@angular/core';
import {CategoryService} from "./services/category.service";
import {Observable, Subject, takeUntil} from "rxjs";
import {ICategory} from "./models/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books';

}
