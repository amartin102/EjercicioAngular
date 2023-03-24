import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {
  control: FormControl; 

  actores = [
    {nombre: 'Will Smit', personaje : '', foto: 'https://graziamagazine.com/mx/wp-content/uploads/sites/13/2018/08/will-smith-luce-espectacular-a-semanas-de-cumplir-50-anos-destacada.jpg?fit=4200%2C2795'}
    ,{nombre: 'Tom Holland', personaje : '', foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/1200px-Tom_Holland_by_Gage_Skidmore.jpg'}    
    ,{nombre: 'Scarlett Johansson', personaje : '', foto: 'https://media.vogue.mx/photos/5e1e2f80964d3e000833efa4/master/w_1947,c_limit/scarlett-johansson-oscars.jpg'}
    ,{nombre: 'Lana Roades', personaje : '', foto: 'https://i.pinimg.com/736x/19/8d/f0/198df0df6f0b498e9e01264419ac8291.jpg'}
  ]
  
  //@ViewChild(MatTable) table : MatTable<Element>; 

  @ViewChild(MatTable) table!: MatTable<any>;
 
  constructor() {  
    this.control = new FormControl;     
   }
 
  actoresOriginal = this.actores;
  actoresSeleccionados: any = [];
  columnasAmostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

 
  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1);
    })
  }

  opcionSelected(item: MatAutocompleteSelectedEvent){
    console.log(item.option.value)
    const value = item.option.value;
    this.actoresSeleccionados.push(item.option.value);
    this.control.patchValue('');

    if (this.table != undefined)
    {
      this.table.renderRows();
    }

  }

  eliminar (item : any) {      
    this.actoresSeleccionados.splice(this.actoresSeleccionados.indexOf(item), 1);
    this.table.renderRows();
  }

  finalizaArrastre (event: CdkDragDrop<any[]>){
    const indicePrevio = this.actoresSeleccionados.indexOf(event.item.data)
    
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex)
    this.table.renderRows();
  }


}
