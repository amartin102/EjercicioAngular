import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-generico',
  templateUrl: './listar-generico.component.html',
  styleUrls: ['./listar-generico.component.css']
})
export class ListarGenericoComponent implements OnInit {

  @Input() listado: any;
  constructor() { }

  ngOnInit(): void {
  }

}
