import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Cours {
  title: string;
  module: string;
  description: string;
  niveau : string;
  fichier: string;
}


@Component({
  standalone: true,
  templateUrl: './mes_cours.component.html', // Chemin relatif correct
  imports: [
    CommonModule
    // autres modules
  ]
})


export class Mes_coursComponent implements OnInit {

    ngOnInit() {
        // Logique d'initialisation ici
    }

    cours: Cours[] = [
      {
        title: 'Apprenez les bases du langage python',
        module: 'Développement',
        description: 'Développement',
        niveau: 'Facile',
        fichier: 'image.jpeg'
      },
      {
        title: 'Apprenez le langage java',
        module: 'Développement',
        description: 'Développement',
        niveau: 'Facile',
        fichier: 'image.jpeg'
      },
      {
        title: 'Créez votre site web avec HTML et CSS',
        module: 'Développement',
        description: 'Développement',
        niveau: 'Facile',
        fichier: 'image.jpeg'
      }
    ];
}
