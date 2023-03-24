'use strict';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { generoModel } from 'src/app/modelos/generomodel';
import { primeraletramayuscula } from 'src/app/utilidades/validadores/primerletramayus';

@Component({
  selector: 'app-formulario-genero',
  templateUrl: './formulario-genero.component.html',
  styleUrls: ['./formulario-genero.component.css']
})
export class FormularioGeneroComponent implements OnInit {
  @Input() ItemModel: any;
  @Output() SubmitForm : EventEmitter<generoModel> = new EventEmitter<generoModel>();
 
  public form: FormGroup;
 
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', 
      {validators: [Validators.required,
                    Validators.minLength(3),
                    primeraletramayuscula()]}]     
    })
   
    this.ItemModel = new generoModel("");
   }

  ngOnInit(): void {
    if(this.ItemModel !== undefined)
    {
      this.form.patchValue(this.ItemModel);
    }
  }

  guardarCambiosForm(){
    console.log(this.form.value)
    this.SubmitForm.emit(this.form.value);
    //Guardaremos en el api
    //this.router.navigate(['/generos']);
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if(campo?.hasError('required'))
    {
      return 'El campo nombre es requerido'
    }

    if(campo?.hasError('minlength'))
    {
      return 'La longitud mínima es de 3 caracteres'
    }

    if(campo?.hasError('primeraletramayuscula'))
    {
      return campo.getError('primeraletramayuscula').mensaje;
    }
    
    return '';    
  }

}
