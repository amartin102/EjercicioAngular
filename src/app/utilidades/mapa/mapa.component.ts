import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { MarkedRenderer } from 'ngx-markdown';
import { coordenadas } from 'src/app/modelos/coordenadamodel';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  @Input()
  public coordenadasIniciales: coordenadas[] = [];

  @Output()
  public coordenadaSeleccionadaHijo: EventEmitter<coordenadas> = new EventEmitter<coordenadas>();
  constructor() { }

  ngOnInit(): void {
    this.capas = this.coordenadasIniciales.map(val => marker([val.latitud, val.longitud]));    
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 12,
    center: latLng(6.236401782128623, -75.54790914058687)
  };

  capas: Marker<any>[] = [];
  
  manejarClick(event: LeafletMouseEvent){
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;
    console.log("Latitud: " + latitud);
    console.log("longitud: " + longitud);

    /*
    Latitud: 6.236337290120275
    Longitud: 6.236337290120275
    */

    this.capas = [];
    this.capas.push(marker([latitud, longitud]));

    this.coordenadaSeleccionadaHijo.emit({latitud: latitud, longitud: longitud});
  }

}
