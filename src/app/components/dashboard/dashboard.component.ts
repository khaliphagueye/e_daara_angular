import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service'; // Assurez-vous que le chemin est correct
import { Course } from '../../models/course.model'; // Modèle pour les cours

@Component({
  standalone: true,
  templateUrl: './dashboard.component.html', // Chemin relatif correct
  imports: [
    CommonModule
    // autres modules
  ]
})
export class DashboardComponent implements OnInit {

  

  // Données de test pour les cours
  courses = [
    { title: 'Introduction à Angular', dateInscription: '2023-01-15', progression: 75, certificat: 'https://example.com/angular' },
    { title: 'Apprendre TypeScript', dateInscription: '2023-02-10', progression: 50, certificat: 'https://example.com/typescript' },
    { title: 'Créez votre site web avec html et css', dateInscription: '2023-03-05', progression: 90, certificat: 'https://example.com/html-css' },
    { title: 'JavaScript pour les débutants', dateInscription: '2023-04-20', progression: 30, certificat: 'https://example.com/javascript' },
    { title: 'Création d’API REST avec Node.js', dateInscription: '2023-05-18', progression: 65, certificat: 'https://example.com/nodejs' },
  ];


  cours = [
    { titre: 'Apprenez les bases du langage python', fichier: '../../dist/assets/img/python.jpeg', module: 'Développement', niveau: 'Facile' },
    { titre: 'Créez votre site web avec html et css', fichier: '../../dist/assets/img/htmlcss.jpeg', module: 'Développement', niveau: 'Facile' },
    { titre: 'Maitrisez les fondamentaux d\'excel', fichier: '../../dist/assets/img/coursexcel.jpeg', module: 'Développement', niveau: 'Facile' },
    { titre: 'Apprenez le langage java', fichier: '../../dist/assets/img/java.jpeg', module: 'Développement', niveau: 'Facile' }
    
    // Ajoute plus de cours ici
  ];

  /*coursesz: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(
      (data: Course[]) => { // Typage explicite de 'data'
        this.courses = data;
      },
      (error: any) => { // Typage explicite de 'error'
        console.error('Error fetching courses', error);
      }
    );
  }*/
    ngOnInit(): void {
        
    }
}
