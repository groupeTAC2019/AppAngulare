import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { deepStrictEqual } from 'assert';
import { Option } from '../models/Option';
import { Observable } from 'rxjs';
import { Adresse } from '../models/Adresse';

const options ={
headers: new HttpHeaders({
  'Access-Control-Allow-Origin':'*'
})}


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getAllOptions():Observable<Option[]>{
    return this.http.get<Option[]>('http://localhost:60583/api/options',options);
  }

  login(login){
      const fd = new FormData;
      fd.append('login', login);

      return this.http.post('url de ton api', fd)
  }


  postBien(bien,adresse){
    let resultAdresse : Adresse = null;
    resultAdresse = this.http.post('http://localhost:60583/api/Adresse',adresse);
    bien.id_adresse = resultAdresse.
    this.http.post
  }

}
