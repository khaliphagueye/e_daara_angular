import { Component, OnInit, ViewChild } from '@angular/core';  
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatTableModule, MatTableDataSource } from '@angular/material/table'; 
import { Cours } from '../../models/cours.model';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort'; 
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: './mes_cours.component.html',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSortModule,
    FormsModule
  ]
})
export class Mes_coursComponent implements OnInit {
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
    duree: '',
    fichier: ''
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  @ViewChild(MatSort) sort!: MatSort; 
  selectedCourse: Cours | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadCours();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; 
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
    this.newCours = { id: 0, titre: '', module: '', contenu: '', niveau: '', prerequis: '',fichier:'', title: '', mot_cle: '', duree: '' };
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

  // Méthode pour supprimer un cours
  deleteCourse(coursId: number): void {
    const url = `http://localhost:8082/cours/${coursId}`;
    this.http.delete(url).subscribe({
      next: () => {
        this.cours = this.cours.filter(course => course.id !== coursId);
        this.dataSource.data = this.cours;
        console.log('Cours supprimé avec succès');
      },
      error: (err: HttpErrorResponse) => {
        console.log('Erreur lors de la suppression:', err);
        alert(`Erreur lors de la suppression du cours: ${err.message}`);
      }
    });
  }

  // Ajout de la méthode pour naviguer vers les détails du cours
  navigateToCourseDetails(courseId: number): void {
    const foundCourse = this.cours.find(course => course.id === courseId);
    if (foundCourse) {
        this.router.navigateByUrl(`/admin/cours-details/${courseId}`, { state: { course: foundCourse } });
    }
}

  public clearCourseDetails(): void {
    this.selectedCourse = null;
  }
}
