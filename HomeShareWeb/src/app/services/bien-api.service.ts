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
export class BienApiService {

  path = 'http://localhost:60583/api'

  constructor(private http: HttpClient) { }

  getAll():Observable<Bien[]>{

    // let   headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append('Accept', 'application/json');
    // headers = headers.append('Access-Control-Allow-Origin', '*');

    

     return this.http.get<Bien[]>(this.path + '/bien/getall', options);
  }
}
