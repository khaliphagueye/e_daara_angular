import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatTableModule, MatTableDataSource } from '@angular/material/table'; // Import correct du module MatTable et MatTableDataSource
import { Cours } from '../../models/cours.model';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; // Utilisation du module MatPaginator
import { MatSort, MatSortModule } from '@angular/material/sort'; // Import du tri
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  templateUrl: './mes_cours.component.html',
  imports: [
    CommonModule,
    MatTableModule,      // Module pour les tables
    MatPaginatorModule,  // Module pour la pagination
    HttpClientModule,
    MatSortModule,        // Module pour le tri
    FormsModule
  ]
})
export class Mes_coursComponent implements OnInit {
  public cours: Cours[] = [];
  public dataSource: MatTableDataSource<Cours> = new MatTableDataSource<Cours>();
  public displayedColumns: string[] = ['id', 'titre', 'module', 'contenu', 'niveau', 'prerequis', 'actions'];

  public newCours: Cours = {
    id: 0, // Si l'ID est généré automatiquement par le backend, vous pouvez l'ignorer
    titre: '',
    module: '',
    contenu: '',
    niveau: '',
    prerequis: '',
    title: '',
    mot_cle: '',
    duree: ''
  };


  @ViewChild(MatPaginator) paginator!: MatPaginator; // Correction de ViewChild
  @ViewChild(MatSort) sort!: MatSort; // Correction de la casse ici (MatSort)
course: any;

  constructor(private http: HttpClient, private router : Router) {}

  ngOnInit(): void {
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


    this.fetchCourses();
  }
  fetchCourses() {
    throw new Error('Method not implemented.');
  }
  
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; // Assigner le paginator après que la vue ait été initialisée
    this.dataSource.sort = this.sort; // Assigner le tri après la vue initialisée
  }




// Méthode pour ajouter un cours
onSubmit(): void {
  const url = 'http://localhost:8082/cours/';
  this.http.post<Cours>(url, this.newCours).subscribe({
    next: (data: Cours) => {
      console.log('Cours ajouté avec succès:', data);
      this.cours.push(data); // Ajouter le nouveau cours à la liste existante
      this.dataSource.data = [...this.cours]; // Mettre à jour la table sans rechargement
      this.newCours = { id: 0, titre: '', module: '', contenu: '', niveau: '', prerequis: '',title: '',mot_cle: '',duree: '' }; // Réinitialiser le formulaire
    },
    error: (err: HttpErrorResponse) => {
      console.error('Error lors de l\'ajout du cours:', err);
    }
  });
}




  // Méthode pour supprimer un cours
deleteCourse(coursId: number): void {
  const url = `http://localhost:8082/cours/${coursId}`; // Construction de l'URL pour la suppression

  this.http.delete(url).subscribe({
    next: () => {
      // Supprime le cours de la liste après une suppression réussie
      this.cours = this.cours.filter(course => course.id !== coursId);
      this.dataSource.data = this.cours; // Met à jour la source de données pour le tableau
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
  this.router.navigateByUrl(`/admin/cours-details/${courseId}`);
}
}




