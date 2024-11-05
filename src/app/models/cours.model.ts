export interface Cours {

titre: any;
  id: number;
  contenu:string;
  niveau: string;
  module: string;
  prerequis: string;
  mot_cle: string;
  duree: string;
  introduction: string;
  //vous pouvez les rendre optionnelles dans votre interface Cours en ajoutant ?
  contenu1?:string;
  contenu2?:string;
  contenu3?:string;
  contenu4?:string;
  contenu5?:string;
  contenu6?:string;
  contenu7?:string;
  contenu8?:string;
  contenu9?:string;
  contenu10?:string;
  contenu11?:string;
  contenu12?:string;
  contenu13?:string;
  contenu14?:string;
  contenu15?:string;
  contenu16?:string;
  image: string; // Champ pour stocker le chemin de l'image dans la base de données
  imageUrl?: string; // URL de l'image à afficher dans Angular
  

  // autres propriétés...
}

