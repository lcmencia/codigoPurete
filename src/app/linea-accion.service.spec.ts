import { TestBed, inject } from '@angular/core/testing';

import { LineaAccionService } from './linea-accion.service';

describe('LineaAccionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LineaAccionService]
    });
  });

  it('should be created', inject([LineaAccionService], (service: LineaAccionService) => {
    expect(service).toBeTruthy();
  }));
});
