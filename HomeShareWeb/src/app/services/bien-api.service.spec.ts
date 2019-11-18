import { TestBed } from '@angular/core/testing';

import { BienApiService } from './bien-api.service';

describe('BienApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BienApiService = TestBed.get(BienApiService);
    expect(service).toBeTruthy();
  });
});
