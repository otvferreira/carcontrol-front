import { TestBed } from '@angular/core/testing';

import { ControleVeiculosService } from './controle-veiculos.service';

describe('ControleVeiculosService', () => {
  let service: ControleVeiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControleVeiculosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
