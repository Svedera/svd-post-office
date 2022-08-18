import { APP_INITIALIZER, LOCALE_ID, Provider } from '@angular/core';

import { AppConfig } from './app.config';
import {
  ApiConfiguration,
  AppConfiguration,
  RuntimeConfiguration,
  TimeoutConfiguration
} from 'src/app/core/models/appConfiguration';
import { Logging } from '@services/abstract/logging';
import { LoggingService } from '@services/logging.service';
import { LayoutService } from '@services/layout.service';
import { RuntimeConfigService } from '@services/app-configuration.service';
import { ShipmentService } from '@services/shipment.service';
import { ShipmentHandler } from '@services/abstract/shipmentHandler';
import { LocaleService } from '@services/locale-service.service';

export const initConfig = (appConfig: RuntimeConfigService) => {
  return () => appConfig.loadConfig();
}

export const AppProviders: Provider[] = [
  {
    provide: APP_INITIALIZER,
    useFactory: initConfig,
    deps: [RuntimeConfigService],
    multi: true,
  },
  {
    provide: RuntimeConfiguration,
    deps: [RuntimeConfigService],
    useFactory: (service: RuntimeConfigService) =>
      service.getConfig()
  },
  {
    provide: LOCALE_ID,
    deps: [LocaleService],
    useFactory: (localeService: LocaleService) =>
      localeService.registerLocaleCulture()
  },

  {
    provide: AppConfiguration, useValue: AppConfig
  },
  {
    provide: TimeoutConfiguration, useValue: AppConfig.timeouts
  },
  {
    provide: ApiConfiguration, useValue: AppConfig.apiPaths
  },
  {
    provide: ShipmentHandler, useClass: ShipmentService
  },
  {
    provide: Logging, useClass: LoggingService
  },
  LayoutService
];
