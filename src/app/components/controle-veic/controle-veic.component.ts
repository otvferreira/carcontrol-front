import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../veiculo.service';

@Component({
  selector: 'app-controle-veiculo',
  templateUrl: './controle-veiculo.component.html',
  styleUrls: ['./controle-veiculo.component.css']
})
export class ControleVeiculoComponent implements OnInit {
  veiculos: any[] = [];  // Array para armazenar os veículos
  selectedVeiculoId: number | null = null;
  ocupado: boolean = false;

  constructor(private veiculoService: VeiculoService) {}

  ngOnInit(): void {
    // Aqui você pode carregar a lista de veículos da API se necessário
  }

  onSelectVeiculo(id: number) {
    this.selectedVeiculoId = id;
  }

  onUpdateStatus() {
    if (this.selectedVeiculoId !== null) {
      this.veiculoService.atualizarStatusVeiculo(this.selectedVeiculoId, this.ocupado).subscribe(
        response => {
          console.log('Status do veículo atualizado com sucesso', response);
          // Lógica adicional após a atualização, como exibir uma mensagem de sucesso
        },
        error => {
          console.error('Erro ao atualizar status do veículo', error);
        }
      );
    }
  }
}