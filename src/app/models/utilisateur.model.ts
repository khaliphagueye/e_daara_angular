export interface Utilisateur {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  mdp: string;
  date_naissance: Date; // Ajout de la date de naissance
  statut: string;       // Ajout du statut
  typeUtilisateur: string;
  roles: string[];
  profession: string;  // Profession peut être optionnelle selon le type d'utilisateur
  biographie: string;   // Biographie pour les formateurs
  specialite: string;   // Spécialité pour les apprenants
  niveau: string;       // Niveau pour les apprenants
  photoProfil: string;  // Photo de profil pour les apprenants
  sexe?: string;         // Sexe pour les apprenants
}
