import { Component } from '@angular/core';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-cadastro-veiculo',
  templateUrl: './cadastro-veiculo.component.html',
  styleUrls: ['./cadastro-veiculo.component.css']
})
export class CadastroVeiculoComponent {
  veiculo = {
    marca: '',
    modelo: '',
    ano: '',
    placa: ''
  };

  constructor(private veiculoService: VeiculoService) {}

  onSubmit() {
    this.veiculoService.cadastrarVeiculo(this.veiculo).subscribe(
      response => {
        console.log('Veículo cadastrado com sucesso', response);
        // Lógica adicional após o cadastro, como limpar o formulário ou redirecionar o usuário
      },
      error => {
        console.error('Erro ao cadastrar veículo', error);
      }
    );
  }
}
