import { TestBed } from '@angular/core/testing';

import { AngularConsoleLoggerService } from './angular-console-logger.service';
import { LoggerConfiguration } from './logger.config';


const loggerConfigurationMock: LoggerConfiguration = {
  appPrefix: 'jcLogger',
  isProduction: false
};

describe('AngularConsoleLoggerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: LoggerConfiguration,
        useValue: loggerConfigurationMock
      }
    ]
  }));

  it('should be created', () => {
    const service: AngularConsoleLoggerService = TestBed.get(AngularConsoleLoggerService);
    expect(service).toBeTruthy();
  });
});
