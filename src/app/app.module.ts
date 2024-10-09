import { NgModule } from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { AppComponent } from './app.component';
import { Mes_coursComponent } from './components/mes_cours/mes_cours.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AjouterCoursDialogComponent } from './components/mes_cours/ajouter-cours-dialog/ajouter-cours-dialog.component';

@NgModule({
  declarations: [
    AppComponent // Déclaration d'AppComponent uniquement
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    Mes_coursComponent, // Ajoutez votre composant ici
    MatDialogModule, // Assurez-vous que le MatDialogModule est importé
    FormsModule,
    AjouterCoursDialogComponent // Ajoutez votre composant de dialogue ici
  ],
  bootstrap: [AppComponent] // Ajout du bootstrap de votre AppComponent
})
export class AppModule { }
