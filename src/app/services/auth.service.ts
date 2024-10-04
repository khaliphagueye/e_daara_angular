/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) {}

  logout(): void {
    // Appeler le backend pour la déconnexion
    this.http.post('http://localhost:8082/auth/logout', {}).subscribe({
      next: () => {
        localStorage.removeItem('userToken'); // Supprimer le token du stockage local
        this.router.navigate(['/login']); // Rediriger vers la page de connexion
      },
      error: err => {
        console.error('Erreur de déconnexion', err);
      }
    });
  }
}*/
