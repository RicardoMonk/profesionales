import { TestBed } from '@angular/core/testing';

import { InfoProService } from './info-pro.service';

describe('InfoProService', () => {
  let service: InfoProService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoProService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
