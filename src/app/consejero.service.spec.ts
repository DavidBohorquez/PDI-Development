import { TestBed } from '@angular/core/testing';

import { ConsejeroService } from './consejero.service';

describe('ConsejeroService', () => {
  let service: ConsejeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsejeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
