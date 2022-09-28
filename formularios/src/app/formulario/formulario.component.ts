import { Component, Input, OnInit } from '@angular/core';
import { formularioInitI } from '../interfaces/formularioinit';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() init : formularioInitI = {
    input1: false,
    input2: false,
    input3: false,
    input4: false,
    input5: false
  };

  items : any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
