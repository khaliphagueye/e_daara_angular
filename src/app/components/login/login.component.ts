import { HttpClient } from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink, RouterOutlet } from '@angular/router'; // Importer Router
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports : [FormsModule, HttpClientModule,RouterLink,RouterOutlet,CommonModule],
  templateUrl: './login.component.html' // Chemin relatif correct
})
export class LoginComponent implements OnInit {

    ngOnInit() {
        // Logique d'initialisation ici
    }

    loginObjet: Login;

    constructor(private http: HttpClient, private router: Router) { // Injecter Router
        this.loginObjet = new Login();
    }

    onLogin() {
        this.http.post("http://localhost:8082/auth/login", this.loginObjet).subscribe(
            (res: any) => {
                if (res.result) {
                    // Stocker les informations utilisateur dans localStorage
                    localStorage.setItem('utilisateur', JSON.stringify(res.utilisateur));
                    // Rediriger vers le tableau de bord
                    this.router.navigate(['/admin']);
                } else {
                    // Afficher un message d'erreur détaillé
                    alert(res.message);
                }
            },
            (error) => {
                // Afficher un message d'erreur détaillé
                alert("Erreur lors de la connexion : " + (error.error?.message || "Échec de la connexion"));
            }
        );
    }

}
    


export class Login {
    email: string;
    mdp: string;

    constructor() {
        this.email = '';
        this.mdp = '';
    }
}
