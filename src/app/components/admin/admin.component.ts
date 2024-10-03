import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  templateUrl: './admin.component.html', // Chemin relatif correct
  imports: [RouterLink, RouterOutlet]
})
export class AdminComponent implements OnInit {

    ngOnInit() {
        // Logique d'initialisation ici
    }
}
