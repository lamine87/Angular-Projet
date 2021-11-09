import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  // Proprieté 
  // Avec la declaration @Input() on precise que la proprieté est "entrante", peuplée depuis un composant
  // 
  @Input() livre!:Book;
  constructor() { }

  ngOnInit(): void {
  }

}
