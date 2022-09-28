import { Component, Input, OnInit } from '@angular/core';
import { formularioInitI } from '../interfaces/formularioinit';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() config : formularioInitI[] = [];

  items : any = [];

  constructor() { }

  ngOnInit(): void {
  }

}
