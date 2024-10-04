import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

//import { AuthService } from '../../services/auth.service'; // Assure-toi d'importer le service

@Component({
  standalone: true,
  templateUrl: './admin.component.html', // Chemin relatif correct
  imports: [RouterLink, RouterOutlet]
})
export class AdminComponent implements OnInit {

    ngOnInit() {
        // Logique d'initialisation ici
    }

    //constructor(private authService: AuthService) {}

  // Méthode pour se déconnecter
  //onLogout() {
   // this.authService.logout(); // Appeler la méthode de déconnexion du service
  //}
}
