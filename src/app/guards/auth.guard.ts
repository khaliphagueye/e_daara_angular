import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true; // Si l'utilisateur est connecté, accès autorisé
    } else {
      this.router.navigate(['/login']); // Si non, rediriger vers la page de connexion
      return false;
    }
  }
}
