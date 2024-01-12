import { TestBed } from '@angular/core/testing';

import { ChRouteServiceService } from './ch-route-service.service';

describe('ChRouteServiceService', () => {
  let service: ChRouteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChRouteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
