import { TestBed, inject } from '@angular/core/testing';

import { WeatherDetailsService } from './weather-details.service';

describe('WeatherDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherDetailsService]
    });
  });

  it('should be created', inject([WeatherDetailsService], (service: WeatherDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
