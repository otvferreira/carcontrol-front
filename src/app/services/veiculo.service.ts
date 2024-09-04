import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private apiUrl = 'http://localhost:8080/V1/veiculo';

  constructor(private http: HttpClient) { }

  cadastrarVeiculo(veiculo: any): Observable<any> {
    const token = sessionStorage.getItem("auth-token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.post(`${this.apiUrl}/cadastrar`, veiculo, { headers });
  }

  atualizarStatusVeiculo(id: number, ocupado: boolean): Observable<any> {
    const token = sessionStorage.getItem("auth-token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    const body = { ocupado };

    return this.http.put(`${this.apiUrl}/atualizar-status/${id}`, body, { headers });
  }
}