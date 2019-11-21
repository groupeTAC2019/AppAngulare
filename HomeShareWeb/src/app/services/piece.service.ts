import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Piece } from '../models/Piece';

const options = {
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PieceService {
  
  path = 'http://localhost:60583/api'

  constructor(private http : HttpClient) { }
  
  getAllOption():Observable<Piece[]>{
    return this.http.get<Piece[]>(this.path + '/Piece',options)
  }
  getOptionById(id : number):Observable<Piece>{
    return this.http.get<Piece>(this.path + '/Piece/' + id , options)
  }
}
