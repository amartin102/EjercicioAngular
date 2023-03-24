import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { generoModel} from '../../../modelos/generomodel';
@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  public itemModel : any;
  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.itemModel = new generoModel("Prueba");

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log("Parametro desde Editar: " + params.id);
    })
  }

  guardarCambios(genero: generoModel){
    //Guardaremos en el api
    alert("El genero recibido para editar es: " +genero.nombre);
    //this.router.navigate(['/generos']);
  }

}
