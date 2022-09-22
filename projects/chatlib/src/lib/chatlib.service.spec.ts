import { TestBed } from '@angular/core/testing';

import { ChatlibService } from './chatlib.service';

describe('ChatlibService', () => {
  let service: ChatlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
