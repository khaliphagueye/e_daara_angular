import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { Cours } from '../../models/cours.model';
import { Router } from '@angular/router';
//import { CourseService } from '../../services/course.service'; // Assurez-vous que le chemin est correct
//import { Course } from '../../models/course.model'; // Modèle pour les cours

@Component({
  standalone: true,
  templateUrl: './dashboard.component.html', // Chemin relatif correct
  imports: [
    CommonModule,
    MatTableModule,
    HttpClientModule,
    MatSortModule,
  
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


  course = [
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
  


    public cours: Cours[] = [];
    public dataSource: MatTableDataSource<Cours> = new MatTableDataSource<Cours>();
    public displayedColumns: string[] = ['id', 'titre', 'module', 'contenu', 'niveau', 'prerequis', 'actions'];
  
    public newCours: Cours = {
      id: 0,
      titre: '',
      module: '',
      contenu: '',
      niveau: '',
      prerequis: '',
      title: '',
      mot_cle: '',
      duree: ''
    };
  
    @ViewChild(MatSort) sort!: MatSort; 
    selectedCourse: Cours | null = null;
  
    constructor(private http: HttpClient, private router: Router) {}
  
    ngOnInit(): void {
      this.loadCours();
    }
  
    ngAfterViewInit(): void { 
      this.dataSource.sort = this.sort; 
    }
  
    loadCours(): void {
      const url = "http://localhost:8082/cours";
      this.http.get<Cours[]>(url).subscribe({
        next: (data: Cours[]) => {
          this.cours = data;
          this.dataSource.data = this.cours;
        },
        error: (err: HttpErrorResponse) => {
          console.log('Error:', err);
        }
      });
    }
  
    // Méthode pour charger les détails du cours
    loadCourseDetails(courseId: number): void {
      const foundCourse = this.cours.find(course => course.id === courseId);
      if (foundCourse) {
        this.selectedCourse = { ...foundCourse };
        console.log('Détails du cours chargés:', this.selectedCourse);
      } else {
        console.error('Cours non trouvé avec l\'ID:', courseId);
      }
    }
  
    // Méthode pour ajouter un cours
    onSubmit(): void {
      const url = 'http://localhost:8082/cours/';
      this.http.post<Cours>(url, this.newCours).subscribe({
        next: (data: Cours) => {
          console.log('Cours ajouté avec succès:', data);
          this.dataSource.data.push(data);
          this.dataSource._updateChangeSubscription();
          this.resetNewCours();
        },
        error: (err: HttpErrorResponse) => {
          console.error('Error lors de l\'ajout du cours:', err);
        }
      });
    }
  
    resetNewCours(): void {
      this.newCours = { id: 0, titre: '', module: '', contenu: '', niveau: '', prerequis: '', title: '', mot_cle: '', duree: '' };
    }
  
    // Méthode pour modifier un cours
    public updateCourse(): void {
      if (this.selectedCourse && this.selectedCourse.id) {
        const url = `http://localhost:8082/cours/${this.selectedCourse.id}`;
        this.http.put<Cours>(url, this.selectedCourse).subscribe({
          next: () => {
            console.log('Cours modifié avec succès');
            this.loadCours();
            this.clearCourseDetails();
          },
          error: (err: HttpErrorResponse) => {
            console.log('Erreur lors de la modification du cours:', err);
          }
        });
      } else {
        console.error('Aucun cours sélectionné pour la modification.');
      }
    }

    // Ajout de la méthode pour naviguer vers les détails du cours
  navigateToCourseDetails(courseId: number): void {
    const foundCourse = this.cours.find(course => course.id === courseId);
    if (foundCourse) {
        this.router.navigateByUrl(`/admin/cours-contenu/${courseId}`, { state: { course: foundCourse } });
    }
}

  public clearCourseDetails(): void {
    this.selectedCourse = null;
  }


}
