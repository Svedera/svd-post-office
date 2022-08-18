import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import {
  ApiConfiguration,
  RuntimeConfiguration,
  TimeoutConfiguration
} from 'src/app/core/models/appConfiguration';
import {
  ApiConfigSuffix,
  RuntimeConfig,
  TimeoutConfig
} from 'src/app/app.config';
import { ShipmentService } from './shipment.service';
import { Logging } from './abstract/logging';
import { LoggingService } from './logging.service';

describe('ShipmentService', () => {
  let httpTestingController: HttpTestingController;
  let service: ShipmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ShipmentService,
        { provide: TimeoutConfiguration, useValue: TimeoutConfig },
        { provide: ApiConfiguration, useValue: ApiConfigSuffix },
        { provide: RuntimeConfiguration, useValue: RuntimeConfig },
        { provide: Logging, useClass: LoggingService }
      ]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ShipmentService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
