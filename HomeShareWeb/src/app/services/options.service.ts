import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Option } from '../models/Option';

const options = {
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  path = 'http://localhost:60583/api'

  constructor(private http : HttpClient) { }

  getAllOption():Observable<Option[]>{
    return this.http.get<Option[]>(this.path + '/Options',options)
  }
  getOptionById(id : number):Observable<Option>{
    return this.http.get<Option>(this.path + '/Options/' + id , options)
  }
  

}
