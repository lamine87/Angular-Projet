import { Component, OnInit } from '@angular/core';
import { FILTEREDDATAS } from '../datas/listeData';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

// PROPRIETE 

// On declare une propriete qui sera automatiquement accessible dans la vue html du composant

filterDatas  = FILTEREDDATAS;

// On declare une propriete relative à la saisie de l'utilisateur  qui servira à filtrer automatiquement la liste
// La propriete  doit etre vide au demarrage d'ou l'utilisateur du qui sigifie qu'elle a le droit
saisie!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
