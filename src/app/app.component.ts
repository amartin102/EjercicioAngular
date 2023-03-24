import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  public title: string;
  public ocultar: boolean = false;
    
  constructor(){
  
   this.title = "valor inicial del titulo";
  }

  duplicarNumbero(valor: number): number{
    return valor * 2;
  }
  
  ngOnInit(): void {
    
  }

  ratedSelected(value: number): void {
    alert(value);
  }

  getValueText(event: any)
  {
    this.title = event.target.value;
  }
}
