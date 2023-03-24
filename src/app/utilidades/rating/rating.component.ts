import { Component, Input, OnInit, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() maxRating : number;
  @Input() ratingSelected : number;
  public maxRatingArray: any;
  public selectedValue: boolean;
  public oldRatinSelected: number;
  @Output() rated: EventEmitter<number>;


  constructor() {
    this.maxRating = 5;
    this.ratingSelected = 0;
    this.selectedValue = false;
    this.oldRatinSelected = 0;
    this.rated = new EventEmitter<number>();
   }

  ngOnInit(): void {
    
    this.maxRatingArray = Array(this.maxRating);
  }

  changeMouseEnter(index: number): void{
    this.ratingSelected = index+1;
  }

  changeMouseLeave(){

    if(this.oldRatinSelected > 0)
    {
      this.ratingSelected = this.oldRatinSelected;
    }
    else {
      this.ratingSelected = 0;
    }
  }

  rate(index: number): void{
    this.ratingSelected = index+1;
    this.selectedValue = true;
    this.oldRatinSelected = this.ratingSelected;
    this.rated.emit(this.ratingSelected);
  }
}
