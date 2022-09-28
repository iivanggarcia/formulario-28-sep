import { Component, Input, OnInit } from '@angular/core';
import { FormularioComponent } from '../formulario/formulario.component';
import { formularioInitI } from '../interfaces/formularioinit';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() cardInit : number = 0;

  configFormulario : formularioInitI = {
    input1: false,
    input2: false,
    input3: false,
    input4: false,
    input5: false
  };

  constructor() { }

  ngOnInit(): void {
    this.generarFormulariosCard();
  }

  generarFormulariosCard(){
    if(this.cardInit == 1){
      this.configFormulario = this.crearObjFormularioInit(true, false, true, false, true);
    }
    else {
      this.configFormulario = this.crearObjFormularioInit(true, true, true, true, false);
    }
  }

  crearObjFormularioInit(a: boolean, b: boolean, c: boolean, d: boolean, e: boolean){
    let obj : formularioInitI = {
      input1: a,
      input2: b,
      input3: c,
      input4: d,
      input5: e
    }
    return obj;
  }

}
