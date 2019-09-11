import { NgModule, ModuleWithProviders } from '@angular/core';
import { AngularConsoleLoggerComponent } from './angular-console-logger.component';
import { LoggerConfiguration } from './logger.config';



@NgModule({
  declarations: [AngularConsoleLoggerComponent],
  imports: [
  ],
  exports: [AngularConsoleLoggerComponent]
})
export class AngularConsoleLoggerModule {
  public static forRoot(configuration: LoggerConfiguration): ModuleWithProviders {
    return {
      ngModule: AngularConsoleLoggerModule,
      providers: [{
        provide: LoggerConfiguration,
        useValue: configuration
      }]
    }
  }
}
