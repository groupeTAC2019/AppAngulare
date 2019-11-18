import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Bien } from '../models/Bien';
import { Reponse } from '../models/reponse';

@Injectable({
  providedIn: 'root'
})
export class BienApiService {

  path = 'http://localhost:60583/api'

  constructor(private http: HttpClient) { }

  getAll():Observable<Reponse>{
     return this.http.get<Reponse>(this.path + '/Bien/getall');
  }
}
