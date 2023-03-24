import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { generoModel } from 'src/app/modelos/generomodel';

@Component({
  selector: 'app-crear-genero',
  templateUrl: './crear-genero.component.html',
  styleUrls: ['./crear-genero.component.css']
})
export class CrearGeneroComponent{

  constructor(private router: Router) 
  { }
  
  guardarCambios(genero: generoModel){
    //Guardaremos en el api
    alert("El genero recibido es: " +genero.nombre);
    //this.router.navigate(['/generos']);
  }
  

}
