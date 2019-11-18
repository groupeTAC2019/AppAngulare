import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { deepStrictEqual } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }




  login(login){
      const fd = new FormData;
      fd.append('login', login);

      return this.http.post('url de ton api', fd)
  }




}
