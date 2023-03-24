import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  public modelo: actorDTO;//ActorCreacionDTO;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
    this.modelo = {nombre : 'Camila 2', fechaNacimiento : new Date(), foto : 'https://spoiler.bolavip.com/__export/1613770092360/sites/bolavip/img/2021/02/19/keanu_reeves_marvel_wolverine_crop1613770089998.jpg_423682103.jpg'};
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
      console.log(params.id);
      
    })

    console.log("Model Enviado Desde Editar Actor:")
    console.log(this.modelo);
  }

  guardarcambios(actor : ActorCreacionDTO){
    console.log(actor);
  }

}
