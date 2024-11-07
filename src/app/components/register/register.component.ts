import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterOutlet } from '@angular/router'; // Importer Router
import { CommonModule } from '@angular/common';
import { Utilisateur } from '../../models/utilisateur.model';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@Component({
  standalone: true,
  imports : [FormsModule, HttpClientModule,RouterLink,RouterOutlet,CommonModule,MatTableModule,MatSortModule],

  templateUrl: './register.component.html' // Chemin relatif correct
})
export class RegisterComponent implements OnInit {

    public newUtilisateur: Utilisateur = {
        id: 0,
        nom: '',
        prenom: '',
        email: '',
        mdp: '',
        date_naissance: new Date(), // Initialisation de la date
        statut: '', // Ajouter une valeur par défaut si nécessaire
        typeUtilisateur: 'APPRENANT',
        roles: ['APPRENANT'], // Le rôle "Apprenant" est défini par défaut
        profession: '',
        biographie: '',
        specialite: '',
        niveau: '',
        photoProfil: ''
      }

    private baseUrl = 'http://localhost:8082/utilisateurs';
// Source de données utilisée pour afficher les utilisateurs dans la table
public dataSource: MatTableDataSource<Utilisateur> = new MatTableDataSource<Utilisateur>();
public successMessage: string = '';
public errorMessage: string = ''; // Message d'erreur
  constructor(private http: HttpClient, private router: Router) {}
    ngOnInit() {
        // Logique d'initialisation ici
    }

     // Méthode pour ajouter un nouvel utilisateur
     onSubmit(): void {
        const url = 'http://localhost:8082/utilisateurs/ajouter';
        this.http.post<{ message: string; utilisateur: Utilisateur }>(url, this.newUtilisateur).subscribe({
            next: (response) => {
                console.log('Utilisateur ajouté avec succès:', response.utilisateur);
                this.dataSource.data.push(response.utilisateur);
                this.dataSource._updateChangeSubscription();
    
                // Affichez le message de succès et videz le message d'erreur
                this.successMessage = 'Utilisateur ajouté avec succès';
                this.errorMessage = '';
            },
            error: (err: HttpErrorResponse) => {
                console.error('Erreur lors de l\'ajout de l\'utilisateur:', err);
    
                // Vérifiez si l'erreur contient un message spécifique
                if (err.error === "Un utilisateur avec cet email existe déjà") {
                    this.errorMessage = 'Un utilisateur avec cet email existe déjà';
                } else {
                    this.errorMessage = 'Erreur lors de l\'ajout de l\'utilisateur. Veuillez réessayer.';
                }
                
                // Réinitialisez le message de succès en cas d'erreur
                this.successMessage = '';
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
}
