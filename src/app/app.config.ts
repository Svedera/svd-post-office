import { LogLevel } from '@enums/logLevel';
import {
  ApiConfiguration,
  AppConfiguration,
  RuntimeConfiguration,
  TimeoutConfiguration
} from '@models/appConfiguration';

export const RuntimeConfig: RuntimeConfiguration = {
  apiBaseUrl: '',
  logLevel: LogLevel.All
}

export const TimeoutConfig: TimeoutConfiguration = {
  requestTimeout: 3000
}

export const ApiConfigSuffix: ApiConfiguration = {
  shipmentRoute: '/api/shipments',
  bagRoute: '/api/bags',
  parcelRoute: '/api/parcels'
}

export const AppConfig: AppConfiguration = {
  timeouts: TimeoutConfig,
  apiPaths: ApiConfigSuffix
}
