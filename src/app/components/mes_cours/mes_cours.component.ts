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
  public displayedColumns: string[] = ['id', 'titre', 'module', 'niveau', 'image', 'actions'];

  public newCours: Cours = {
    id: 0,
    titre: '',
    module: '',
    contenu: '',
    niveau: '',
    prerequis: '',
    mot_cle: '',
    duree: '',
    introduction: '',
    image: '',
    contenu1: '',
    contenu2: '',
    contenu3: '',
    contenu4: '',
    contenu5: '',
    contenu6: '',
    contenu7: '',
    contenu8: '',
    contenu9: '',
    contenu10: '',
    contenu11: '',
    contenu12: '',
    contenu13: '',
    contenu14: '',
    contenu15: '',
    contenu16: ''
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedCourse: Cours | null = null;
  selectedFile: File | null = null;
  imgURL: any; // Propriété pour afficher l'image sélectionnée
  private baseUrl = 'http://localhost:8082/cours';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadCours();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // Charger tous les cours
  loadCours(): void {
    this.http.get<Cours[]>(this.baseUrl).subscribe({
      next: (data: Cours[]) => {
        this.cours = data;
        this.dataSource.data = this.cours;
      },
      error: (err: HttpErrorResponse) => {
        console.log('Erreur lors du chargement des cours:', err);
      }
    });
  }

  // Charger les détails d'un cours spécifique
  loadCourseDetails(courseId: number): void {
    const foundCourse = this.cours.find(course => course.id === courseId);
    if (foundCourse) {
      this.selectedCourse = { ...foundCourse };
      console.log('Détails du cours chargés:', this.selectedCourse);
    } else {
      console.error('Cours non trouvé avec l\'ID:', courseId);
    }
  }

   // Sélectionner un fichier image pour le cours
   onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile); 
      reader.onload = () => { 
        this.imgURL = reader.result; 
      }
    }
  }

  // Ajouter un cours avec une image
  onSubmit(): void {
    if (!this.selectedFile) {
      console.error("Aucun fichier sélectionné !");
      return;
    }

    const formData = new FormData();
    formData.append("file", this.selectedFile);
    formData.append("cours", JSON.stringify(this.newCours));

    const url = 'http://localhost:8082/cours/upload';
    this.http.post(url, formData, { responseType: 'text' }).subscribe({
        next: (response) => {
            console.log("Réponse du serveur:", response);
            this.loadCours();
            this.resetNewCours();
            this.selectedFile = null;
        },
        error: (err: HttpErrorResponse) => {
            console.error("Erreur lors de l'ajout du cours avec image :", err);
        }
    });
}

  // Réinitialiser le formulaire de nouveau cours
  resetNewCours(): void {
    this.newCours = {
      id: 0,
      titre: '',
      module: '',
      contenu: '',
      niveau: '',
      prerequis: '',
      mot_cle: '',
      duree: '',
      introduction: '',
      image: '',
      contenu1: '',
      contenu2: '',
      contenu3: '',
      contenu4: '',
      contenu5: '',
      contenu6: '',
      contenu7: '',
      contenu8: '',
      contenu9: '',
      contenu10: '',
      contenu11: '',
      contenu12: '',
      contenu13: '',
      contenu14: '',
      contenu15: '',
      contenu16: ''
    };
  }

  // Mettre à jour un cours
  updateCourse(): void {
    if (this.selectedCourse && this.selectedCourse.id) {
      this.http.put<Cours>(`${this.baseUrl}/${this.selectedCourse.id}`, this.selectedCourse).subscribe({
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

  // Supprimer un cours
  deleteCourse(coursId: number): void {
    this.http.delete(`${this.baseUrl}/${coursId}`).subscribe({
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

  // Naviguer vers les détails du cours
  navigateToCourseDetails(courseId: number): void {
    const foundCourse = this.cours.find(course => course.id === courseId);
    if (foundCourse) {
      this.router.navigateByUrl(`/admin/cours-details/${courseId}`, { state: { course: foundCourse } });
    }
  }

  // Effacer les détails du cours sélectionné
  clearCourseDetails(): void {
    this.selectedCourse = null;
  }
}
