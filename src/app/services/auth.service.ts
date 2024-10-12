import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  login(token: string) {
    localStorage.setItem('authToken', token); // Stocker le token de session dans le localStorage
  }

  logout() {
    localStorage.removeItem('authToken'); // Supprimer le token du localStorage
    this.router.navigate(['/login']); // Rediriger vers la page de login
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('authToken') !== null;
  }
}
