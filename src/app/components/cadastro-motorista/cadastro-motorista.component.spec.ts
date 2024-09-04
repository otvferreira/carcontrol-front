import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { CadastroMotoristaComponent } from './cadastro-motorista.component';
import { MotoristaService } from '../motorista.service';

describe('CadastroMotoristaComponent', () => {
  let component: CadastroMotoristaComponent;
  let fixture: ComponentFixture<CadastroMotoristaComponent>;
  let motoristaService: MotoristaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastroMotoristaComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [MotoristaService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroMotoristaComponent);
    component = fixture.componentInstance;
    motoristaService = TestBed.inject(MotoristaService);

    spyOn(motoristaService, 'cadastrarMotorista').and.returnValue(of({}));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call cadastrarMotorista on onCadastrarMotorista', () => {
    component.motorista = { nome: 'João', cpf: '12345678900', dataNascimento: '1990-01-01' };

    component.onCadastrarMotorista();

    expect(motoristaService.cadastrarMotorista).toHaveBeenCalledWith({
      nome: 'João',
      cpf: '12345678900',
      dataNascimento: '1990-01-01'
    });
  });

  it('should clear the form after successful registration', () => {
    component.motorista = { nome: 'João', cpf: '12345678900', dataNascimento: '1990-01-01' };

    component.onCadastrarMotorista();
    expect(component.motorista).toEqual({ nome: '', cpf: '', dataNascimento: '' });
  });
});
