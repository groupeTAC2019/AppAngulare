import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Membre } from '../models/Membre';
import { identifierModuleUrl } from '@angular/compiler';

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

  getAllMembre():Observable<Membre[]>{
    return this.http.get<Membre[]>(this.path +'/membre',options)
  };
  getMembreById(id: number):Observable<Membre>{
    return this.http.get<Membre>(this.path + '/membre/'+id, options)
  };
  delMembre(id : number):Observable<boolean>{
    return this.http.delete<boolean>(this.path + '/membre/'+id,options)
  }/*
  //TOTDO : terminer l'api membreController
  getLoginMembre():Observable<boolean>{
    return this.http.get<boolean>(this.path + '/membre/login',options)
  }*/
}