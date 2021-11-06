import { TestBed } from '@angular/core/testing';

import { TipoDestinoService } from './tipo-destino.service';

describe('TipoDestinoService', () => {
  let service: TipoDestinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoDestinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
