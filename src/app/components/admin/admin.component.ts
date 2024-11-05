import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Utilisateur } from '../../models/utilisateur.model';

//import { AuthService } from '../../services/auth.service'; // Assure-toi d'importer le service

@Component({
  standalone: true,
  templateUrl: './admin.component.html', // Chemin relatif correct
  imports: [RouterLink, RouterOutlet,FormsModule,CommonModule]
})
export class AdminComponent implements OnInit {

  

  
    //constructor(private authService: AuthService) {}

  // Méthode pour se déconnecter
  //onLogout() {
   // this.authService.logout(); // Appeler la méthode de déconnexion du service
  //}

  constructor(private authService: AuthService) {}

  onLogout() {
    this.authService.logout(); // Déconnexion de l'utilisateur
  }

  utilisateurConnecte: Utilisateur | null = null;


  ngOnInit(): void {
    this.utilisateurConnecte = this.authService.getUserInfo(); // Récupère l'utilisateur connecté
  }

  getRoleUtilisateur(): string {
    return this.authService.getUserRole(); // Récupère le rôle de l'utilisateur
  }
}
