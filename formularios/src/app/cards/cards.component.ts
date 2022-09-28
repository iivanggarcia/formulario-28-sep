import { Component, Input, OnInit } from '@angular/core';
import { retry } from 'rxjs';
import { FormularioComponent } from '../formulario/formulario.component';
import { formularioInitI } from '../interfaces/formularioinit';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() cardInit : number = 0;

  configFormulario : formularioInitI[] = [];

  constructor() { }

  ngOnInit(): void {
    this.generarFormulariosCard();
  }

  generarFormulariosCard(){
    if(this.cardInit == 1){
      this.configFormulario = this.asignarInputs(true, false, true, false, true);
    }
    else {
      this.configFormulario = this.asignarInputs(true, true, true, true, false);
    }
  }

  asignarInputs(a: boolean, b: boolean, c: boolean, d: boolean, e: boolean){
    let arrInit = [a,b,c,d,e];
    let auxArr : formularioInitI[] = [];
    for(let contador = 0 ; contador < 5; contador ++){
      let auxObj = this.crearObjFormularioInit(arrInit[contador], contador);
      auxArr.push(auxObj);
    }
    return auxArr;
  }

  crearObjFormularioInit(a : boolean, contador : number){
    let c = ++contador;
    let obj : formularioInitI = {
      show: a,
      toolTip: 'toolTip ' + c,
      name: 'name '+ c,
      maxLength: 5,
      placeholder: 'placeholder ' + c,
      disabled: false,
      required: false
    }
    return obj;
  }

}
