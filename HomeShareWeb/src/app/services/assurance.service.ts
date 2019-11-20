import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Assurance } from '../models/Assurance';

const options={
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AssuranceService {

  path = 'http://localhost:60583/api'

  constructor(private http :HttpClient) { }

  getById(id: number):Observable<Assurance>{
     return this.http.get<Assurance>(this.path + '/Adresse/'+id, options);
  }
  
  getAll():Observable<Assurance[]>{
    return this.http.get<Assurance[]>(this.path + '/Adresse',options);
  }
}