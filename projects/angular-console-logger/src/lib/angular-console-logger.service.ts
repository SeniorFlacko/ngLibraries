import { Injectable } from '@angular/core';
import { LoggerConfiguration } from './logger.config';

export abstract class AbstractLoggerService {
  abstract info(infoMessage: string);
  abstract warn(warnMessage: string);
  abstract error(errorMessage: string);
}

@Injectable({
  providedIn: 'root'
})
export class AngularConsoleLoggerService extends AbstractLoggerService {

  constructor(private loggerConfiguration: LoggerConfiguration) {
    super();
  }

  info(infoMessage: string) {
    if (!this.loggerConfiguration.isProduction) {
      console.log(`${this.loggerConfiguration.appPrefix}: ${infoMessage}`);
    }
  }

  warn(warnMessage: string) {
    if (!this.loggerConfiguration.isProduction) {
      console.warn(`${this.loggerConfiguration.appPrefix}: ${warnMessage}`);
    }
  }

  error(errorMessage: string) {
    if (!this.loggerConfiguration.isProduction) {
      console.error(`${this.loggerConfiguration.appPrefix}: ${errorMessage}`);
    }
  }
}
