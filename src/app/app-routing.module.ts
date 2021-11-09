import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import des composants utilisés dans la route
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';


// Array contenant les routes de l'application (json)
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent },

  // Redirection vers home du lancement de l'application 
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
