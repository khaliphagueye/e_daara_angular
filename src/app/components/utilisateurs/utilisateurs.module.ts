import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursDetailsComponent } from './cours-details/cours-details.component';
import { HttpClientModule } from '@angular/common/http'; // Importez ici aussi
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule, // Ajoutez HttpClientModule ici
    MatCardModule
  ],
  exports: []
})
export class CoursModule { }
