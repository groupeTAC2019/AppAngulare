import { Component, OnInit, Input } from '@angular/core';
import { Membre } from 'src/app/models/Membre';
import { MembreService } from 'src/app/services/membre.service';

@Component({
  selector: 'app-carte-membre',
  templateUrl: './carte-membre.component.html',
  styleUrls: ['./carte-membre.component.css']
})
export class CarteMembreComponent implements OnInit {

  @Input() id_membre:number;
  membre:Membre;
  constructor(private membreService:MembreService) { }

  ngOnInit() {
    this.membreService.getById(this.id_membre).subscribe(reponse=>{
      this.membre=reponse
      console.log(this.membre)
    })
  }
}
