import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // Méthode pour se connecter et stocker le token et les informations de l'utilisateur
  login(token: string, user: Utilisateur) {
    localStorage.setItem('authToken', token); // Stocke le token d'authentification
    localStorage.setItem('userInfo', JSON.stringify(user)); // Stocke les informations utilisateur
  }

  // Méthode pour se déconnecter
  logout() {
    localStorage.removeItem('authToken'); // Supprimer le token
    localStorage.removeItem('userInfo'); // Supprimer les informations de l'utilisateur
    this.router.navigate(['/login']); // Redirection vers la page de connexion
  }

  // Méthode pour vérifier si l'utilisateur est connecté
  isLoggedIn(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  // Méthode pour récupérer les informations de l'utilisateur connecté
  getUserInfo(): Utilisateur | null {
    const userInfo = localStorage.getItem('userInfo');
    return userInfo ? JSON.parse(userInfo) : null; // Retourne un objet Utilisateur ou null
  }

   // Méthode pour récupérer le rôle de l'utilisateur connecté
   getUserRole(): string {
    const user = this.getUserInfo();
    return user ? user.roles[0] : 'Rôle non défini'; // Retourne le premier rôle ou 'Rôle non défini'
  }
}
