import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Commentaire } from '../models/Commentaire';

const options = {
  headers : new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  path = 'http://localhost:60583/api'

  constructor(private http: HttpClient) {}

    getAllCommentaire():Observable<Commentaire[]>{
      return this.http.get<Commentaire[]>(this.path + '/commentaire',options)
    }
    getCommentaireById(id: number):Observable<Commentaire>{
      return this.http.get<Commentaire>(this.path + '/commentaire/'+id,options)
    }
}
