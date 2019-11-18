import { Component, OnInit } from '@angular/core';
import { Bien } from '../../models/Bien';
import { BienApiService } from '../../services/bien-api.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  bien: Bien;
  biens: Bien[]= [
    {id_bien:1,
      titre: 'maison de campagne', desc_courte: 'iam impotentia fines mediocrium delictorum nefanda Clematii cuiusdam Alexandrini nobilis mors repentina',
    desc_longue: 'Eminuit autem inter humilia supergressa iam impotentia fines mediocrium delictorum nefanda Clematii cuiusdam Alexandrini nobilis mors repentina',
    nb_personne: 3,
    disponible: true,
    date_desactivation: null,
    date_ajout: new Date("2012-06-15"),
    id_adresse:  1,
    id_membre: 1}
    ,
    {id_bien:2,
      titre: 'appartement centre ville', desc_courte: 'iam impotentia fines mediocrium delictorum nefanda Clematii cuiusdam Alexandrini nobilis mors repentina',
    desc_longue: 'Eminuit autem inter humilia supergressa iam impotentia fines mediocrium delictorum nefanda Clematii cuiusdam Alexandrini nobilis mors repentina',
    nb_personne: 2,
    disponible: false,
    date_desactivation: null,
    date_ajout: new Date("2015-07-22"),
    id_adresse:  2,
    id_membre: 2}
  ]
  
  constructor() { 

  }

  ngOnInit() {
    
}
}
