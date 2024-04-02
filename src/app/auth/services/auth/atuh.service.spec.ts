import { TestBed } from '@angular/core/testing';

import { AtuhService } from './atuh.service';

describe('AtuhService', () => {
  let service: AtuhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtuhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
