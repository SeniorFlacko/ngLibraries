import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { fillArrayOfConsecutiveNumbers } from '../utils/fillArrayOfConsecutiveNumbers';

@Component({
  selector: 'jc-angular-rating',
  template: `
    <div>
      <span *ngFor="let star of stars; let starIndex = index">
        <span class="pointer"
          [ngClass]="{'filled-star': starIndex <= currentRating}"
          (click)="changeRating(starIndex)"
        >
          &#9733;
        </span>
      </span>
    </div>
  `,
  styles: [`
    .pointer {
      cursor: pointer;
    }
    .filled-star {
      color: dodgerblue;
    }
  `]
})
export class AngularRatingComponent implements OnInit {
  @Input() numberOfStars = 10;
  @Input() currentRating = 0;

  @Output() ratingChanged = new EventEmitter();
  stars = [];

  constructor() { }

  ngOnInit() {
    this.stars = fillArrayOfConsecutiveNumbers(this.numberOfStars);
  }

  changeRating(starIndex: number) {
    this.ratingChanged.emit(starIndex);
  }

}
