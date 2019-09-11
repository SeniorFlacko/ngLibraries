import { NgModule } from '@angular/core';
import { AngularRatingComponent } from './angular-rating.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [AngularRatingComponent],
  imports: [
    BrowserModule
  ],
  exports: [AngularRatingComponent]
})
export class AngularRatingModule { }
