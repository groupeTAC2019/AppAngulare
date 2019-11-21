import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pays } from '../models/Pays';

const options = {
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PaysService {

  path = 'http://localhost:60583/api'

  constructor(private http : HttpClient) { }
  
  getAllOption():Observable<Pays[]>{
    return this.http.get<Pays[]>(this.path + '/Pays',options)
  }
  getOptionById(id : number):Observable<Pays>{
    return this.http.get<Pays>(this.path + '/Pays/' + id , options)
  }
}
