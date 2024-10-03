import { HttpClient } from '@angular/common/http'; 
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router'; // Importer Router

@Component({
  standalone: true,
  imports : [FormsModule, HttpClientModule],
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
        debugger;
        this.http.post("http://localhost:8082/auth/login", this.loginObjet).subscribe((res: any) => {
            if (res) {
                alert("Connexion réussie");
                this.router.navigate(['/admin']); // Redirection vers le tableau de bord
            } else {
                alert(res.message);
            }
        }, (error) => {
            alert("Échec de la connexion : identifiants incorrects.");
        });
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
