import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laging-page',
  templateUrl: './laging-page.component.html',
  styleUrls: ['./laging-page.component.css']
})
export class LagingPageComponent implements OnInit {
  public title1 : string;
  public title2: string;
  public peliculasencartelera : any;
  public peliculasproximosestrenos: any;

  constructor() {
    this.title1 = "En Cartelera"; 
    this.title2 = "Próximos Estrenos" 
   }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.peliculasencartelera = [{
        titulo: 'Wonder Woman',
        anio: new Date(),
        precio: 15.950,
        imagen: 'https://es.web.img2.acsta.net/c_310_420/pictures/19/02/01/20/49/5136728.jpg'
      },
      {
        titulo: 'Super Man',
        anio: new Date(),
        precio: 55.100,
        imagen: 'https://www.tonica.la/__export/1593799548785/sites/debate/img/2020/07/03/henry-cavill-superman-portada.jpg_423682103.jpg'
      },
      {
        titulo: 'Van Helsing',
        anio: new Date(),
        precio: 15.950,
        imagen: 'https://images-na.ssl-images-amazon.com/images/I/71ZRmaGjvdL._SX425_.jpg'
      }
      ];

      this.peliculasproximosestrenos = [
      ]
    }, 500)
  }

}
