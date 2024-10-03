import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  templateUrl: './dashboard.component.html' // Chemin relatif correct
})
export class DashboardComponent implements OnInit {

  // Données de test pour les cours
  public courses = [
    { title: 'Introduction à Angular', enrollmentDate: '2023-01-15', progress: 75, link: 'https://example.com/angular' },
    { title: 'Apprendre TypeScript', enrollmentDate: '2023-02-10', progress: 50, link: 'https://example.com/typescript' },
    { title: 'Développement Web avec HTML & CSS', enrollmentDate: '2023-03-05', progress: 90, link: 'https://example.com/html-css' },
    { title: 'JavaScript pour les débutants', enrollmentDate: '2023-04-20', progress: 30, link: 'https://example.com/javascript' },
    { title: 'Création d’API REST avec Node.js', enrollmentDate: '2023-05-18', progress: 65, link: 'https://example.com/nodejs' },
  ];

  ngOnInit() {
    // Logique d'initialisation ici
  }

}
