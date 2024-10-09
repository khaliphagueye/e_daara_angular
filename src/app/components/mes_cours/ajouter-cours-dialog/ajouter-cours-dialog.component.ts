import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import de HttpClient
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ajouter-cours-dialog',
  templateUrl: './ajouter-cours-dialog.component.html',
})
export class AjouterCoursDialogComponent {
  newCours = {
    titre: '',
    module: '',
    contenu: '',
    niveau: '',
    prerequis: '',
  };

  constructor(private http: HttpClient, public dialogRef: MatDialogRef<AjouterCoursDialogComponent>) {}

  onSubmit(): void {
    const url = 'http://localhost:8082/cours'; // URL pour ajouter un cours
    this.http.post(url, this.newCours).subscribe({
      next: () => {
        console.log('Cours ajouté avec succès');
        this.dialogRef.close(true); // Ferme le dialogue et retourne un succès
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout du cours:', err);
      }
    });
  }


  onCancel(): void {
    this.dialogRef.close();  // Ferme simplement la boîte de dialogue sans action supplémentaire
  }
}
