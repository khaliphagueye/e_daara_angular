import { Component, OnInit, ViewChild } from '@angular/core';   
import { CommonModule } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; // Pour effectuer des requêtes HTTP
import { MatTableModule, MatTableDataSource } from '@angular/material/table'; // Pour gérer l'affichage des données dans une table Material 
import { Utilisateur } from '../../models/utilisateur.model'; // Importation du modèle Utilisateurs
import { HttpClientModule } from '@angular/common/http';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; // Gestion de la pagination dans la table
import { MatSort, MatSortModule } from '@angular/material/sort'; // Gestion du tri dans la table
import { Router } from '@angular/router'; // Pour la navigation entre les composants
import { FormsModule } from '@angular/forms'; // Pour gérer les formulaires

@Component({
  standalone: true,
  templateUrl: './utilisateurs.component.html', // Fichier HTML associé à ce composant
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSortModule,
    FormsModule
  ]
})
export class UtilisateursComponent implements OnInit {
  // Tableau pour stocker les utilisateurs récupérés de l'API
  public utilisateurs: Utilisateur[] = [];
  
  // Source de données utilisée pour afficher les utilisateurs dans la table
  public dataSource: MatTableDataSource<Utilisateur> = new MatTableDataSource<Utilisateur>();
  
  // Colonnes à afficher dans la table Material
  public displayedColumns: string[] = ['id', 'nom', 'prenom', 'email', 'roles', 'profession', 'actions'];

  // Objet pour stocker les informations d'un nouvel utilisateur à ajouter
  public newUtilisateur: Utilisateur = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    mdp: '',
    date_naissance: new Date(), // Initialisation de la date
    statut: '', // Ajouter une valeur par défaut si nécessaire
    typeUtilisateur: '',
    roles: [],
    profession: '',
    biographie: '',
    specialite: '',
    niveau: '',
    photoProfil: ''
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Référence à l'élément de pagination
  @ViewChild(MatSort) sort!: MatSort; // Référence à l'élément de tri
  
  // Utilisateur sélectionné pour affichage ou modification
  selectedUtilisateur: Utilisateur | null = null;
  private baseUrl = 'http://localhost:8082/utilisateurs';

  constructor(private http: HttpClient, private router: Router) {}

  // Méthode appelée lors de l'initialisation du composant
  ngOnInit(): void {
    this.loadUtilisateurs(); // Chargement des utilisateurs depuis l'API
  }

  // Méthode appelée après l'initialisation de la vue pour lier la pagination et le tri
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; 
    this.dataSource.sort = this.sort; 
  }

  // Méthode pour charger les utilisateurs depuis l'API
  loadUtilisateurs(): void {
    const url = "http://localhost:8082/utilisateurs";
    this.http.get<Utilisateur[]>(url).subscribe({
      next: (data: Utilisateur[]) => {
        this.utilisateurs = data; // Stockage des utilisateurs récupérés
        this.dataSource.data = this.utilisateurs; // Mise à jour de la table avec les données
      },
      error: (err: HttpErrorResponse) => {
        console.log('Error:', err); // Gestion des erreurs de la requête HTTP
      }
    });
  }

  // Méthode pour charger les détails d'un utilisateur en fonction de son ID
  loadUtilisateurDetails(utilisateurId: number): void {
    const foundUtilisateur = this.utilisateurs.find(utilisateur => utilisateur.id === utilisateurId);
    if (foundUtilisateur) {
      this.selectedUtilisateur = { ...foundUtilisateur }; // Stockage de l'utilisateur trouvé dans la variable selectedUtilisateur
      console.log('Détails de l\'utilisateur chargés:', this.selectedUtilisateur);
    } else {
      console.error('Utilisateur non trouvé avec l\'ID:', utilisateurId);
    }
  }

  // Méthode pour ajouter un nouvel utilisateur
onSubmit(): void {
  const url = 'http://localhost:8082/utilisateurs/ajouter';
  this.http.post<{ message: string; utilisateur: Utilisateur }>(url, this.newUtilisateur).subscribe({
      next: (response) => {
          console.log('Utilisateur ajouté avec succès:', response.utilisateur);
          this.dataSource.data.push(response.utilisateur); // Ajout de l'utilisateur à la table
          this.dataSource._updateChangeSubscription(); // Mise à jour de la table
          location.reload(); // Recharge de la page
      },
      error: (err: HttpErrorResponse) => {
          console.error('Erreur lors de l\'ajout de l\'utilisateur:', err);
      }
  });
}





  // Méthode pour réinitialiser le formulaire d'ajout d'utilisateur
  resetNewUtilisateur(): void {
    this.newUtilisateur = {
      id: 0,
    nom: '',
    prenom: '',
    email: '',
    mdp: '',
    date_naissance: new Date(), // Initialisation de la date
    statut: '', // Ajouter une valeur par défaut si nécessaire
    typeUtilisateur: '',
    roles: [],
    profession: '',
    biographie: '',
    specialite: '',
    niveau: '',
    photoProfil: ''
    };
  }

  // Méthode pour modifier un utilisateur existant
  public updateUtilisateur(): void {
    if (this.selectedUtilisateur && this.selectedUtilisateur.id) {
      const url = `http://localhost:8082/utilisateurs/${this.selectedUtilisateur.id}`;
      this.http.put<Utilisateur>(url, this.selectedUtilisateur).subscribe({
        next: () => {
          console.log('Utilisateur modifié avec succès');
          this.loadUtilisateurs(); // Rechargement des utilisateurs pour actualiser la liste
          this.clearUtilisateurDetails(); // Réinitialisation des détails de l'utilisateur
        },
        error: (err: HttpErrorResponse) => {
          console.log('Erreur lors de la modification de l\'utilisateur:', err);
        }
      });
    } else {
      console.error('Aucun utilisateur sélectionné pour la modification.');
    }
  }

  // Méthode pour supprimer un utilisateur
  deleteUtilisateur(utilisateurId: number): void {
    const url = `http://localhost:8082/utilisateurs/${utilisateurId}`;
    this.http.delete(url).subscribe({
        next: () => {
            this.utilisateurs = this.utilisateurs.filter(utilisateur => utilisateur.id !== utilisateurId); // Suppression de l'utilisateur localement
            this.dataSource.data = this.utilisateurs; // Mise à jour des données affichées
            console.log('Utilisateur supprimé avec succès');
        },
        error: (err: HttpErrorResponse) => {
            console.log('Erreur lors de la suppression:', err);
            alert(`Erreur lors de la suppression de l'utilisateur: ${err.message}`);
        }
    });
}


  // Méthode pour naviguer vers la page de détails d'un utilisateur
  navigateToUtilisateurDetails(utilisateurId: number): void {
    const foundUtilisateur = this.utilisateurs.find(utilisateur => utilisateur.id === utilisateurId);
    if (foundUtilisateur) {
        this.router.navigateByUrl(`/admin/utilisateur-details/${utilisateurId}`, { state: { utilisateur: foundUtilisateur } });
    }
  }

  // Méthode pour effacer les détails de l'utilisateur sélectionné
  public clearUtilisateurDetails(): void {
    this.selectedUtilisateur = null; // Réinitialisation de l'utilisateur sélectionné
  }
}
