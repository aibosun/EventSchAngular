import { TestBed } from '@angular/core/testing';

import { TeApiService } from './te-api.service';

describe('TeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeApiService = TestBed.get(TeApiService);
    expect(service).toBeTruthy();
  });
});
