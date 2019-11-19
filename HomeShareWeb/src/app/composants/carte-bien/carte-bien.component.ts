import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carte-bien',
  templateUrl: './carte-bien.component.html',
  styleUrls: ['./carte-bien.component.css']
})
export class CarteBienComponent implements OnInit {

  @Input() bien
  
  constructor() { }

  ngOnInit() {
  }

}
