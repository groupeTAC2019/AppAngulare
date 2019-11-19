import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bien } from '../models/Bien';
import { Reponse_bien } from '../models/reponse_bien';

@Injectable({
  providedIn: 'root'
})
export class BienApiService {

  path = 'http://localhost:60583/api'

  constructor(private http: HttpClient) { }

  getAll():Observable<Reponse_bien>{
     return this.http.get<Reponse_bien>(this.path + '/bien/getall');
  }
}
