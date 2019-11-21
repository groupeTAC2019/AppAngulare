import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Echange } from '../models/Echange';

const options = {
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EchangeService {

  path = 'http://localhost:60583/api'

  constructor(private http : HttpClient) { }

    getAllEchange():Observable<Echange[]>{
      return this.http.get<Echange[]>(this.path + '/Echange',options)
    }

    getEchangeById(id : number):Observable<Echange>{
      return this.http.get<Echange>(this.path + '/Echange/' + id, options)
    }
}
