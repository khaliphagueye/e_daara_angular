import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importer FormsModule pour utiliser ngModel
import { QuillModule } from 'ngx-quill';
import { LineBreakPipe } from '../../line-break.pipe';

@Component({
  selector: 'app-cours-contenu',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    QuillModule,
    LineBreakPipe   // Ajouter FormsModule pour utiliser ngModel
  ],
  templateUrl: './cours-contenu.component.html',
  styleUrls: ['./cours-contenu.component.css']
})
export class CoursContenuComponent implements OnInit {
  coursId!: string;
  course: any; // ou remplacez par le type Cours si vous l'avez défini
  truncatedContent: string = ''; // Variable pour stocker le contenu tronqué
  showFullContent: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.coursId = this.activatedRoute.snapshot.params['id'];
    // Récupérer les données passées par l'état de la route
    this.course = history.state.course;

    // Si course est null, cela signifie qu'il n'a pas été trouvé
    if (!this.course) {
      console.error('Aucun détail de cours trouvé');
    }
    else {
      // Limiter le contenu à 300 caractères (par exemple)
      this.truncatedContent = this.course.contenu.substring(0, 200000) + '...';
    }
  }
  commencerCours(): void {
    // Rediriger vers une autre page avec l'ID du cours
    this.router.navigateByUrl(`/admin/lecon-cours-contenu/${this.coursId}`, { state: { course: this.course } });
  }
}


