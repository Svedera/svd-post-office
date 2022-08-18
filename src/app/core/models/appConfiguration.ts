import { LogLevel } from '@enums/logLevel';

export class RuntimeConfiguration {
  apiBaseUrl: string;
  logLevel: LogLevel;

  constructor(
    apiBaseUrl: string,
    logLevel: LogLevel) {

    this.apiBaseUrl = apiBaseUrl;
    this.logLevel = logLevel;
  }
}

export class AppConfiguration {
  timeouts: TimeoutConfiguration;
  apiPaths: ApiConfiguration;

  constructor(
    timeouts: TimeoutConfiguration,
    apiConfiguration: ApiConfiguration) {

    this.timeouts = timeouts;
    this.apiPaths = apiConfiguration;
  }
}

export class TimeoutConfiguration {
  requestTimeout: number;

  constructor(
    requestTimeout: number) {

    this.requestTimeout = requestTimeout;
  }
}

export class ApiConfiguration {
  shipmentRoute: string;
  bagRoute: string;
  parcelRoute: string;

  constructor(
    shipmentRoute: string,
    bagRoute: string,
    parcelRoute: string) {

    this.shipmentRoute = shipmentRoute;
    this.bagRoute = bagRoute;
    this.parcelRoute = parcelRoute;
  }
}
