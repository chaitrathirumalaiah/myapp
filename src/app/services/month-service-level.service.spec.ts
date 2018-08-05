import { TestBed, inject } from '@angular/core/testing';

import { MonthServiceLevelService } from './month-service-level.service';

describe('MonthServiceLevelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonthServiceLevelService]
    });
  });

  it('should be created', inject([MonthServiceLevelService], (service: MonthServiceLevelService) => {
    expect(service).toBeTruthy();
  }));
});
