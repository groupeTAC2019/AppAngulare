import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carte-maison',
  templateUrl: './carte-maison.component.html',
  styleUrls: ['./carte-maison.component.css']
})
export class CarteMaisonComponent implements OnInit {

  @Input() maison

  constructor() { }

  ngOnInit() {
  }

}
