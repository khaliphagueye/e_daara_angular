import { CommonModule } from '@angular/common'; 
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importer FormsModule pour utiliser ngModel
import { QuillModule } from 'ngx-quill';
import { LineBreakPipe } from '../../line-break.pipe';


import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


declare var $: any; // Pour déclarer jQuery si vous l'utilisez
@Component({
  selector: 'app-lecon-cours-contenu',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    QuillModule,
    LineBreakPipe
  ],
  templateUrl: './lecon-cours-contenu.component.html',
  styleUrls: ['./lecon-cours-contenu.component.css']
})


export class LeconCoursContenuComponent implements OnInit {

  
  nomCours: string = 'Introduction à Angular'; // Remplace par une variable dynamique
  date: string = new Date().toLocaleDateString(); // Date actuelle
  attestation: string = 'En foi de quoi la présente attestation est délévrée'; // Remplace par une variable dynamique
  programme_e_daara: string = 'Le programme E-Daara'; // Remplace par une variable dynamique
  logoPath: string = 'assets/logo.png'; // Chemin vers le logo

  utilisateur: any;

downloadPDF() {
    const element = document.getElementById('certificat');
    if (element) {
        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const imgWidth = 190;
            const pageHeight = pdf.internal.pageSize.height;
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft >= 0) {
                position = heightLeft - imgHeight;
                pdf.addPage();
                pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }
            
            pdf.save('certificat.pdf');
        });
    }
}



  currentStep: number = 0; // Étape actuelle
  steps: string[] = ['Leçon 1', 'Leçon 2', 'Leçon 3','Quizz','Certificat'];
  totalSteps: number = this.steps.length;

  nextStep() {
    if (this.currentStep < this.totalSteps - 1) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  get progressWidth() {
    return `${(this.currentStep / (this.totalSteps - 1)) * 100}%`;
  }

  coursId!: string;
  course: any; // ou remplacez par le type Cours si vous l'avez défini

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.coursId = this.activatedRoute.snapshot.params['id'];
    this.course = history.state.course;

    if (!this.course) {
      console.error('Aucun détail de cours trouvé');
    }



 // Récupérer les informations de l'utilisateur depuis localStorage
 const utilisateurData = localStorage.getItem('utilisateur');
 if (utilisateurData) {
   this.utilisateur = JSON.parse(utilisateurData);
 } else {
   // Si aucune information n'est trouvée, rediriger vers la page de connexion
   alert('Utilisateur non connecté');
 }

  }
}