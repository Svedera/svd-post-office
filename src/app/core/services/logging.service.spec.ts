import { TestBed } from '@angular/core/testing';

import { RuntimeConfiguration } from '@models/appConfiguration';
import { RuntimeConfig } from 'src/app/app.config';

import { LoggingService } from './logging.service';

describe('LoggingService', () => {
  let service: LoggingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: RuntimeConfiguration, useValue: RuntimeConfig
      }
      ]
    });
    service = TestBed.inject(LoggingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
