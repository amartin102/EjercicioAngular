import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  @Input() peliculas : any;
  constructor() { }

  ngOnInit(): void {
    /*this.peliculas = [{
      titulo: 'Van Helsing',
      anio: new Date(),
      precio: 15.950
    },
    {
      titulo: 'Super Man',
      anio: new Date(),
      precio: 55.100
    }
    ]*/
  }

  remover(index : number): void {
    this.peliculas.splice(index, 1);
  }

}
