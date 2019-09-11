import { Component } from '@angular/core';
import { AngularConsoleLoggerService } from 'angular-console-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8demo';
  rating = 5;
  message = '';

  constructor(private loggerService: AngularConsoleLoggerService) { }

  onRatingChanged($event) {
    this.rating = $event;
  }

  logMessage(messageType: string) {
    if (!messageType || !this.message) {
      return;
    }

    if (messageType === 'warn') {
      this.loggerService.warn(this.message)
    } else if (messageType === 'error') {
      this.loggerService.error(this.message);
    } else {
      this.loggerService.info(this.message);
    }
  }
}
