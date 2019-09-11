import { AbstractLoggerService } from 'angular-console-logger';

export class CustomLoggerService extends AbstractLoggerService {
  info(infoMessage: string) {
    console.log(`Overwrite info logger: ${infoMessage}`);
  }
  warn(warnMessage: string) {
    console.warn(`Overwrite warn logger: ${warnMessage}`);
  }
  error(errorMessage: string) {
    console.error(`Overwrite error logger: ${errorMessage}`);
  }
}