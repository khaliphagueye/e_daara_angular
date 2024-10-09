import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cours } from '../models/cours.model';
import { ICoursService, ICoursServiceToken } from './interface_cours/icours.service';


@Injectable({
  providedIn: 'root'
})
export class CoursService implements ICoursService {
  private apiUrl = "http://localhost:8082/cours";

  constructor(private http: HttpClient) {}

  getAllCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(this.apiUrl);
  }
}

// Enregistrer le service avec le token d'injection
export const coursServiceProvider = {
  provide: ICoursServiceToken,
  useClass: CoursService
};
