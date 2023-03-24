import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cineModel } from 'src/app/modelos/cinemodel';
import { cineEditModel } from 'src/app/modelos/cinemodel';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  public modelEdit : cineEditModel = {nombre :"CineMark", latitud: 6.252281406026562, longitud: -75.56684017181396};

  constructor(
    private activatedRoute: ActivatedRoute
  ) {

      //this.modelEdit = new cineModel("CineMark");

      console.log(this.modelEdit.nombre);
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log("Editar desde Cines: " + params.id)
    })
  }

  guardarCambiosPadre(itemCine: cineModel){
    console.log(itemCine);
  }

}
