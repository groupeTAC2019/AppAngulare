import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiServiceService) { }

  ngOnInit() {

  }

  sendLogin(){
    this.api.login({email: 'xxx', password: 'xxxx'}).subscribe( data => {
      console.log(data);
    },
    error => {
      console.log(error);
      
    })
  }

}
