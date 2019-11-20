import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Membre } from '../models/Membre';

const options={
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}
@Injectable({
  providedIn: 'root'
})
export class MembreService {

  path = 'http://localhost:60583/api'

  constructor(private http :HttpClient) { }

  getById(id: number):Observable<Membre>{
     return this.http.get<Membre>(this.path + '/membre/'+id, options);
  }
}