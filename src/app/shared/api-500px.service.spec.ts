import { TestBed, inject } from '@angular/core/testing';

import { Api500px.Service.TsService } from './api-500px.service.ts.service';

describe('Api500px.Service.TsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Api500px.Service.TsService]
    });
  });

  it('should be created', inject([Api500px.Service.TsService], (service: Api500px.Service.TsService) => {
    expect(service).toBeTruthy();
  }));
});
