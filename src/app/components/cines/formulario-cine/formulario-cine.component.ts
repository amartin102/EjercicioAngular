import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { cineModel } from 'src/app/modelos/cinemodel';
import { coordenadas } from 'src/app/modelos/coordenadamodel';

@Component({
  selector: 'app-formulario-cine',
  templateUrl: './formulario-cine.component.html',
  styleUrls: ['./formulario-cine.component.css']
})
export class FormularioCineComponent implements OnInit {

  @Input()
  public modelo: cineModel = new cineModel("", 0, 0);;
  
  public form: FormGroup;

  public coordenadaInicial : coordenadas[] = [];

  @Output()
  public guardarCambiosHijo : EventEmitter<cineModel> = new EventEmitter<cineModel>();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required]
      }],
      latitud: ['', {
        Validators: [Validators.required]
      }],
      longitud: ['', {
        Validators: [Validators.required]
      }]
    })
   
   }
   
  ngOnInit(): void {
    console.log("Modelo Recibido desde Editar: ");
    console.log(this.modelo);

    this.form.patchValue(this.modelo);
    this.coordenadaInicial.push({latitud: this.modelo.latitud, longitud: this.modelo.longitud});
  }

  OnSubmit(){
    this.guardarCambiosHijo.emit(this.form.value);
  }

  coordenadaSeleccionadaPadre(item: coordenadas){
    this.form.patchValue(item);    
  }

}
