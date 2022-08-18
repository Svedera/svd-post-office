import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import {
  RuntimeConfiguration,
  TimeoutConfiguration
} from '@models/appConfiguration';
import { RuntimeConfig, TimeoutConfig } from 'src/app/app.config';
import { Logging } from './abstract/logging';
import { HttpBaseService } from './http-base.service';
import { LoggingService } from './logging.service';

describe('HttpBaseService', () => {
  let service: HttpBaseService;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpBaseService,
        { provide: TimeoutConfiguration, useValue: TimeoutConfig },
        { provide: RuntimeConfiguration, useValue: RuntimeConfig },
        { provide: Logging, useClass: LoggingService }
      ]
    }).compileComponents();

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HttpBaseService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
