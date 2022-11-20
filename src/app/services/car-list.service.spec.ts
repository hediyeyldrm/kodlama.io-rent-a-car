import { TestBed } from '@angular/core/testing';

import { CarListService } from './car-list.service';

describe('CarListService', () => {
  let service: CarListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
