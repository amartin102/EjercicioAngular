import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-markdown',
  templateUrl: './input-markdown.component.html',
  styleUrls: ['./input-markdown.component.css']
})
export class InputMarkdownComponent implements OnInit {

  @Output()
  changeMarkDown: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  placeHolder: string = 'Texto'

  @Input()
  content = '';

  constructor() { }

  ngOnInit(): void {   

  }

  //No es necesario ya que se controla desde la vista desde (change)="changeMarkDown.emit($any($event.target).value)"
  inputTextArea(value: any){

    this.content = value;
    this.changeMarkDown.emit(value);
  }
  

}
