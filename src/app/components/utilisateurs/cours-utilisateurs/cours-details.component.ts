// CoursDetailsComponent
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cours-details',
  standalone: true,
  imports: [CommonModule,MatCardModule], // Ajouter CommonModule ici
  templateUrl: './cours-details.component.html',
  styleUrls: ['./cours-details.component.css']
})
export class CoursDetailsComponent implements OnInit {
  coursId!: string;
  course: any; // ou remplacez par le type Cours si vous l'avez défini

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.coursId = this.activatedRoute.snapshot.params['id'];
    // Récupérer les données passées par l'état de la route
    this.course = history.state.course;

    // Si course est null, cela signifie qu'il n'a pas été trouvé
    if (!this.course) {
      console.error('Aucun détail de cours trouvé');
    }
  }
}
