import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  mostrarCard1 : boolean = false;
  mostrarCard2 : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick1() {
    this.mostrarCard2 = false;
    this.mostrarCard1 = !this.mostrarCard1;
  }
  onClick2() {
    this.mostrarCard1 = false;
    this.mostrarCard2 = !this.mostrarCard2;
  }
}
