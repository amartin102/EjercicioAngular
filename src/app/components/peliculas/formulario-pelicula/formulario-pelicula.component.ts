import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PeliculaModel, PeliculaModelEdit } from 'src/app/modelos/peliculaform';
import { MultipleSelectorModel } from 'src/app/modelos/selectormultiplemodel';

@Component({
  selector: 'app-formulario-pelicula',
  templateUrl: './formulario-pelicula.component.html',
  styleUrls: ['./formulario-pelicula.component.css']
})
export class FormularioPeliculaComponent implements OnInit {

  form: FormGroup;

  @Output()
  OnSubmit: EventEmitter<PeliculaModel> = new EventEmitter<PeliculaModel>()

  @Input()
  modelo: PeliculaModelEdit = {titulo : '', fechaLanzamiento : new Date(), 
          enCine : true, imagen : '', resumen : '', trailer : ''  };

  generosNoSeleccionadosPadre: MultipleSelectorModel[] =  [{clave: 1, valor: 'Drama'}, {clave: 2, valor: 'Acción'}, {clave: 3, valor: 'Comedia'}]

  generosSeleccionadosPadre: MultipleSelectorModel[] = [];

  cinesNoSeleccionadosPadre: MultipleSelectorModel[] = [
    {clave: 1, valor: 'Cinemark'},
    {clave: 2, valor: 'Cinemas Procinal'},
    {clave: 3, valor: 'Otro Cine'}
  ]

  cinesSeleccionadosPadre: MultipleSelectorModel[] = []

  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      titulo: [
        '',
        {
          validators: [Validators.required]
        }
      ],
      resumen: '',
      enCine: false,
      trailer: '',
      fechaLanzamiento: '',
      imagen: '',
      generosId: '',
      cinesId: ''
    })
    
    console.log("Datos de edición recibidos")
    console.log(this.modelo)

    if(this.modelo !== undefined)
      {        
        this.form.patchValue(this.modelo);
      }
   }
 
  ngOnInit(): void {
      
  }

  guardarPadre (){
    console.log(this.generosSeleccionadosPadre)
    const generosIds = this.generosSeleccionadosPadre.map(x => x.clave);
    const cinesIds = this.cinesSeleccionadosPadre.map(x=> x.clave);
    console.log(generosIds)
    console.log(cinesIds)

    this.form.get('generosId')?.setValue(generosIds)
    this.form.get('cinesId')?.setValue(cinesIds)
    this.OnSubmit.emit(this.form.value);
  }

  archivoSeleccionado(image: File) {
    this.form.get('imagen')?.setValue(image);
  }
 
  setChangeMarkDown (value : any){
    this.form.get('resumen')?.setValue(value);
  }
}
