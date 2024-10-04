import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

interface Documents {
  title: string;
  contenu: string;
  date_ajout: string;
}

@Component({
  standalone: true,
  templateUrl: './mes_documents.component.html', // Chemin relatif correct
  imports: [
    CommonModule
    // autres modules
  ]
})
export class Mes_documentsComponent implements OnInit {

    ngOnInit() {
        // Logique d'initialisation ici
    }

    documents: Documents[] = [
      {
        title: 'Apprenez les bases du langage python',
        contenu: 'doc.pdf',
        date_ajout: '01/10/2024',
      },
      {
        title: 'Apprenez le langage java',
        contenu: 'fichier.pdf',
        date_ajout: '02/10/2024',
      },
      {
        title: 'Créez votre site web avec HTML et CSS',
        contenu: '',
        date_ajout: '02/10/2024',
      }
    ];
}
