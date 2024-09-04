import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private apiUrl = 'http://localhost:8080/V1/veiculo/cadastrar';

  constructor(private http: HttpClient) { }

  cadastrarVeiculo(veiculo: any): Observable<any> {
    return this.http.post(this.apiUrl, veiculo);
  }
}