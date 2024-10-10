import { NgModule } from '@angular/core';   
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importez ici

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AppComponent } from './app.component';
import { Mes_coursComponent } from './components/mes_cours/mes_cours.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'; // Importer MatCardModule
import { AjouterCoursDialogComponent } from './components/mes_cours/ajouter-cours-dialog/ajouter-cours-dialog.component';
import { CoursDetailsComponent } from './components/mes_cours/cours-details/cours-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UtilisateursComponent } from './components/utilisateurs/utilisateurs.component';


@NgModule({
  declarations: [
    AppComponent // Déclaration d'AppComponent uniquement
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Ajoutez HttpClientModule ici
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    Mes_coursComponent, // Ajoutez votre composant ici
    MatDialogModule, 
    CoursDetailsComponent,// Assurez-vous que le MatDialogModule est importé
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    UtilisateursComponent
    // autres modules...
  ],
  bootstrap: [] // Ajout du bootstrap de votre AppComponent
})
export class AppModule { }
