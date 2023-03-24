import { Component, Input, OnInit } from '@angular/core';
import { MultipleSelectorModel } from 'src/app/modelos/selectormultiplemodel';

@Component({
  selector: 'app-selector-multiple',
  templateUrl: './selector-multiple.component.html',
  styleUrls: ['./selector-multiple.component.css']
})
export class SelectorMultipleComponent implements OnInit {

  @Input()
  seleccionadosHijo: MultipleSelectorModel[] = [];

  @Input()
  noSeleccionadosHijo: MultipleSelectorModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar (item: MultipleSelectorModel, posicion: number){
    this.seleccionadosHijo.push(item)
    this.noSeleccionadosHijo.splice(posicion, 1)
  }

  deseleccionar(item: MultipleSelectorModel, posicion: number){
    this.noSeleccionadosHijo.push(item)
    this.seleccionadosHijo.splice(posicion, 1)
  }

  seleccionarTodo (){
    this.seleccionadosHijo.push(...this.noSeleccionadosHijo)
    this.noSeleccionadosHijo = []
  }

  deseleccionarTodo (){
    this.noSeleccionadosHijo.push(...this.seleccionadosHijo)
    this.seleccionadosHijo = []
  }

}
