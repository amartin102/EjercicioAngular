import { Component, OnInit } from '@angular/core';
import { ActorCreacionDTO } from '../actor';

@Component({
  selector: 'app-crear-actor',
  templateUrl: './crear-actor.component.html',
  styleUrls: ['./crear-actor.component.css']
})
export class CrearActorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  guardarCambios(actor: ActorCreacionDTO){
    console.log("Los datos obtenidos son: ");
    console.log(actor);
  }

}
