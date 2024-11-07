import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

interface Documents {
  title: string;
  contenu: string;
  date_ajout: string;
}

@Component({
  standalone: true,
  templateUrl: './mon_profil.component.html', // Chemin relatif correct
  imports: [
    CommonModule
  ]
})
export class Mon_profilComponent implements OnInit {
  utilisateur: any;

  ngOnInit(): void {
    // Récupérer les informations de l'utilisateur depuis localStorage
    const utilisateurData = localStorage.getItem('utilisateur');
    if (utilisateurData) {
      this.utilisateur = JSON.parse(utilisateurData);
    } else {
      // Si aucune information n'est trouvée, rediriger vers la page de connexion
      alert('Utilisateur non connecté');
    }
  }
}

