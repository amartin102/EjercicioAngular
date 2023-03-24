import { Component, OnInit } from '@angular/core';
import { cineModel } from 'src/app/modelos/cinemodel';

@Component({
  selector: 'app-crear-cine',
  templateUrl: './crear-cine.component.html',
  styleUrls: ['./crear-cine.component.css']
})
export class CrearCineComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarCambiosPadre(itemCine: cineModel){
    console.log(itemCine);
  }
}
