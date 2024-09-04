import { Component, OnInit } from '@angular/core';
import { MotoristaService } from '../motorista.service';

@Component({
  selector: 'app-cadastro-motorista',
  templateUrl: './cadastro-motorista.component.html',
  styleUrls: ['./cadastro-motorista.component.css']
})
export class CadastroMotoristaComponent implements OnInit {
  motorista = {
    nome: '',
    cpf: '',
    dataNascimento: ''
  };

  constructor(private motoristaService: MotoristaService) {}

  ngOnInit(): void {}

  onCadastrarMotorista() {
    this.motoristaService.cadastrarMotorista(this.motorista).subscribe(
      response => {
        console.log('Motorista cadastrado com sucesso', response);
        // Limpar o formulário ou fornecer feedback ao usuário
        this.limparFormulario();
      },
      error => {
        console.error('Erro ao cadastrar motorista', error);
      }
    );
  }

  limparFormulario() {
    this.motorista = {
      nome: '',
      cpf: '',
      dataNascimento: ''
    };
  }
}
