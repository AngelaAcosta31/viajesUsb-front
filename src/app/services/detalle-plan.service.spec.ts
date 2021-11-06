import { TestBed } from '@angular/core/testing';

import { DetallePlanService } from './detalle-plan.service';

describe('DetallePlanService', () => {
  let service: DetallePlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetallePlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
