import { Component, Input } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Cours } from '../../../models/cours.model';

@Component({
  selector: 'app-modifier-cours',
  templateUrl: './modifier-cours.component.html'
})
export class ModifierCoursComponent {
  @Input() selectedCourse!: Cours; // Recevoir le cours à modifier

  constructor(private http: HttpClient, private router: Router) {}

  public updateCourse(): void {
    if (this.selectedCourse) {
      const url = `http://localhost:8082/cours/${this.selectedCourse.id}`;
      
      this.http.put<Cours>(url, this.selectedCourse).subscribe({
        next: () => {
          console.log('Cours modifié avec succès');
          this.router.navigateByUrl('/admin/mes-cours'); // Redirige vers la liste des cours
        },
        error: (err: HttpErrorResponse) => {
          console.log('Erreur lors de la modification du cours:', err);
        }
      });
    }
  }
}
