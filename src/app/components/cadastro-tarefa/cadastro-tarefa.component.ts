import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-cadastro-tarefa',
  templateUrl: './cadastro-tarefa.component.html',
  styleUrls: ['./cadastro-tarefa.component.css']
})
export class CadastroTarefaComponent implements OnInit {
  veiculos: any[] = [];
  selectedVeiculoId: number | null = null;
  tarefa = {
    descricao: '',
    data: ''
  };

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit(): void {
    // Aqui você pode carregar a lista de veículos da API
  }

  onCadastrarTarefa() {
    if (this.selectedVeiculoId !== null) {
      this.veiculoService.cadastrarTarefa(this.selectedVeiculoId, this.tarefa).subscribe(
        response => {
          console.log('Tarefa cadastrada com sucesso', response);
          // Limpar o formulário ou fornecer feedback ao usuário
        },
        error => {
          console.error('Erro ao cadastrar tarefa', error);
        }
      );
    }
  }
}
