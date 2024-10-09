// icours.service.ts
import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from '../../models/cours.model';

// Définir un token d'injection
export const ICoursServiceToken = new InjectionToken<ICoursService>('ICoursService');

// Interface pour le service
export interface ICoursService {
  getAllCours(): Observable<Cours[]>;
}
