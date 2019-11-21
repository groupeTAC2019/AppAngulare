import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Option } from 'src/app/models/Option';

@Component({
  selector: 'app-ajout-bien',
  templateUrl: './ajout-bien.component.html',
  styleUrls: ['./ajout-bien.component.css']
})
export class AjoutBienComponent implements OnInit {

  form: FormGroup;

  constructor(private api: ApiServiceService , private builder : FormBuilder) {
    };

  options : Option[];

  ngOnInit() {
    this.api.getAllOptions().subscribe(reponse =>
      {
        this.options=reponse;
        console.log(this.options)
      });
  }

  submitForm(){

  }
}
