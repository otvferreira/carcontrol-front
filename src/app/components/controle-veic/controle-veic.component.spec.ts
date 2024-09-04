import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { ControleVeiculoComponent } from './controle-veiculo.component';
import { VeiculoService } from '../veiculo.service';

describe('ControleVeiculoComponent', () => {
  let component: ControleVeiculoComponent;
  let fixture: ComponentFixture<ControleVeiculoComponent>;
  let veiculoService: VeiculoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ControleVeiculoComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [VeiculoService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleVeiculoComponent);
    component = fixture.componentInstance;
    veiculoService = TestBed.inject(VeiculoService);

    spyOn(veiculoService, 'atualizarStatusVeiculo').and.returnValue(of({}));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call atualizarStatusVeiculo on onUpdateStatus', () => {
    component.selectedVeiculoId = 1;
    component.ocupado = true;

    component.onUpdateStatus();

    expect(veiculoService.atualizarStatusVeiculo).toHaveBeenCalledWith(1, true);
  });

  it('should not call atualizarStatusVeiculo if selectedVeiculoId is null', () => {
    component.selectedVeiculoId = null;

    component.onUpdateStatus();

    expect(veiculoService.atualizarStatusVeiculo).not.toHaveBeenCalled();
  });
});
