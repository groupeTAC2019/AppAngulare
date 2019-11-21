import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Bien } from '../models/Bien';

const options = {
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BienService {

  path = 'http://localhost:60583/api'

  constructor(private http: HttpClient) { }

  getAll():Observable<Bien[]>{
     return this.http.get<Bien[]>(this.path + '/bien/getall', options);
  }

  getDernierBien():Observable<Bien[]>{
    return this.http.get<Bien[]>(this.path + '/bien/dernierBien', options)
  }

  getBienEntreDate():Observable<Bien[]>{
    return this.http.get<Bien[]>(this.path + '/bien/entredates',options)
  }

  getBienPays():Observable<Bien[]>{
    return this.http.get<Bien[]>(this.path + '/bien/pays',options)
  }

  getBienRepu():Observable<Bien[]>{
    return this.http.get<Bien[]>(this.path + '/bien/reputation',options)
  }
  getBienMembre(id_membre : number):Observable<Bien>{
    return this.http.get<Bien>(this.path + '/Membre/' + id_membre + '/Bien',options)
  }
}
