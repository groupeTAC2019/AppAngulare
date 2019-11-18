import { Component, OnInit } from '@angular/core';
import { Bien } from 'src/app/models/Bien';
import { BienApiService } from 'src/app/services/bien-api.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  bien: Bien;
  biens : Bien[]=[];
  constructor(private serviceApi: BienApiService) { 

  }

  ngOnInit() {
    this.serviceApi.getAll().subscribe(
      reponse=>{
      this.biens = reponse.biens;
      });
}
}
