import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-http-list',
  templateUrl: './http-list.component.html',
  styleUrls: ['./http-list.component.css']
})
export class HttpListComponent implements OnInit {

  private _bookListUrl: string = "http://cmeneux.fr/angular-datas/books"

// On déclare une propriete books comme étant un tableau de données répondant au modèle (interface)
  books!: Book[];

  // Ajout de la variable pour filtrer 
  saisie!:string;

// Propriete pour le livre selectionné
  selectedBook!: Book;

  // Constructeur 
  constructor(private _httpClient: HttpClient) { }

  // Methodes
  showDetail(book: Book){
    //console.log(book);
    this.selectedBook = book;
  }
  ngOnInit(): void {
    this._httpClient.get(this._bookListUrl).subscribe((response:any) =>{
      //console.log(response)
      this.books = response;
    })
  }

}
