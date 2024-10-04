import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

interface Utilisateurs {

    nom : string;
    prenom : string;
    email : string;
    specialite : string;
    profession : string;
    profil : string;
    sexe : string;
    statut : string;
    biographie : string;
  
}

@Component({
  standalone: true,
  templateUrl: './utilisateurs.component.html', // Chemin relatif correct
  imports: [
    CommonModule
    // autres modules
  ]
})
export class UtilisateursComponent implements OnInit {

    ngOnInit() {
        // Logique d'initialisation ici
    }

    utilisateurs: Utilisateurs[] = [
      {
        nom: 'DIAO',
        prenom: 'Samba',
        email: 'sambadiao@gmail.com',
        specialite : 'Développeur logiciel',
        profession: 'Développeur logiciel',
        profil: 'FORMATEUR',
        sexe: 'M',
        statut: 'Actif',
        biographie: 'e suis formateur en Développement logiciel',

      }
    ];
}
