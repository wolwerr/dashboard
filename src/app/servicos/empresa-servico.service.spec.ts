import { TestBed } from '@angular/core/testing';

import { EmpresaServicoService } from './empresa-servico.service';

describe('EmpresaServicoService', () => {
  let service: EmpresaServicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpresaServicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
