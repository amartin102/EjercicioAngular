import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-formulario-actores',
  templateUrl: './formulario-actores.component.html',
  styleUrls: ['./formulario-actores.component.css']
})
export class FormularioActoresComponent implements OnInit {

@Input() model : actorDTO;
@Output() submitForm: EventEmitter<ActorCreacionDTO> = new EventEmitter<ActorCreacionDTO>();
//this.article = new Article('', '', '', null, null);
public form : FormGroup;
public image: string;

  constructor( private formBuilder: FormBuilder) {
    this.image = '';
    this.form = this.formBuilder.group({
      nombre : ['',
        {
          validators: [Validators.required]
        }
      ],
     fechaNacimiento: '',
     foto: '',
     biografia: ''
    });

    this.model = new actorDTO("", new Date(), "");
   
    this.form.patchValue(this.model);
        
   }

   ngOnInit(){
    console.log("Modelo Recibido: ");
    console.log(this.model);
   }

  onSubmit(){
    this.submitForm.emit(this.form.value);
  }

  archivoProcesar(event: any)
  {
    this.form.get('foto')?.setValue(event);
  }

  cambioMarkdown(value: any){
    this.form.get('biografia')?.setValue(value);
  }
}
