import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { AngularRatingModule } from "angular-rating";
import { AngularConsoleLoggerModule, AngularConsoleLoggerService } from 'angular-console-logger';
import { CustomLoggerService } from './custom-logger.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularRatingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularConsoleLoggerModule.forRoot({
      isProduction: false,
      appPrefix: `Custom Logger`,
    }),
  ],
  providers: [{
    provide: AngularConsoleLoggerService,
    useClass: CustomLoggerService
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
