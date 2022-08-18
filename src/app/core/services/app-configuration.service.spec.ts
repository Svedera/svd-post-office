import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { RuntimeConfigService } from './app-configuration.service';

describe('AppConfigurationService', () => {
  let service: RuntimeConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RuntimeConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
