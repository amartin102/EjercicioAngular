import { Component, OnInit } from '@angular/core';
import { PeliculaModel, PeliculaModelEdit } from 'src/app/modelos/peliculaform';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modeloEnviado: PeliculaModelEdit = {
    titulo : 'Avenger End Game', trailer: 'asd', enCine : true,
    resumen: 'texto resumen', fechaLanzamiento: new Date(),
    imagen: 'https://lumiere-a.akamaihd.net/v1/images/690x0w_f1b0509a.jpeg?region=0%2C0%2C690%2C1035'
  }

  ngOnInit(): void {
    console.log("Modelo enviado: " + this.modeloEnviado.titulo)
  }

  guardarCambiosEditar (pelicula: PeliculaModelEdit){
    console.log("Datos Recibidos")
    console.log(pelicula)
  }
}
