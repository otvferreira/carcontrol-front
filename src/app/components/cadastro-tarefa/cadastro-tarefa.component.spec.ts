import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { CadastroTarefaComponent } from './cadastro-tarefa.component';
import { VeiculoService } from '../veiculo.service';

describe('CadastroTarefaComponent', () => {
  let component: CadastroTarefaComponent;
  let fixture: ComponentFixture<CadastroTarefaComponent>;
  let veiculoService: VeiculoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroTarefaComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [VeiculoService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTarefaComponent);
    component = fixture.componentInstance;
    veiculoService = TestBed.inject(VeiculoService);

    spyOn(veiculoService, 'cadastrarTarefa').and.returnValue(of({}));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call cadastrarTarefa on onCadastrarTarefa', () => {
    component.selectedVeiculoId = 1;
    component.tarefa = { descricao: 'Limpeza', data: '2024-09-04' };

    component.onCadastrarTarefa();

    expect(veiculoService.cadastrarTarefa).toHaveBeenCalledWith(1, { descricao: 'Limpeza', data: '2024-09-04' });
  });

  it('should not call cadastrarTarefa if selectedVeiculoId is null', () => {
    component.selectedVeiculoId = null;

    component.onCadastrarTarefa();

    expect(veiculoService.cadastrarTarefa).not.toHaveBeenCalled();
  });
});
