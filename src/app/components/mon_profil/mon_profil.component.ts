import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

interface Documents {
  title: string;
  contenu: string;
  date_ajout: string;
}

@Component({
  standalone: true,
  templateUrl: './mon_profil.component.html' // Chemin relatif correct
})
export class Mon_profilComponent implements OnInit {

    ngOnInit() {
        // Logique d'initialisation ici
    }
}
