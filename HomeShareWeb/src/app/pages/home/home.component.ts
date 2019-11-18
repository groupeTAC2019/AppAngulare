import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private maisons = [
    {titre: 'xxxxx', description: 'bla bla bla'},
    {titre: 'xxxxx', description: 'bla bla bla'},
    {titre: 'xxxxx', description: 'bla bla bla'},
    {titre: 'xxxxx', description: 'bla bla bla'},
    {titre: 'xxxxx', description: 'bla bla bla'},
    {titre: 'xxxxx', description: 'bla bla bla'},
    {titre: 'xxxxx', description: 'bla bla bla'},
    {titre: 'xxxxx', description: 'bla bla bla'},
    {titre: 'xxxxx', description: 'bla bla bla'},
    {titre: 'xxxxx', description: 'bla bla bla'},
    {titre: 'xxxxx', description: 'bla bla bla'},
    {titre: 'xxxxx', description: 'bla bla bla'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
