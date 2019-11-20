import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Adresse } from '../models/Adresse';

const options={
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  path = 'http://localhost:60583/api'

  constructor(private http :HttpClient) { }

  getById(id: number):Observable<Adresse>{
     return this.http.get<Adresse>(this.path + '/Adresse/'+id, options);
  }
  getAll():Observable<Adresse[]>{
    return this.http.get<Adresse[]>(this.path + '/Adresse',options);
  }
}