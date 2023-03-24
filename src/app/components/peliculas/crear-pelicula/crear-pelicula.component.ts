import { Component, OnInit } from '@angular/core';
import { PeliculaModel } from 'src/app/modelos/peliculaform';

@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarHijo(pelicula: PeliculaModel){   
    console.log(pelicula);
  }

}
