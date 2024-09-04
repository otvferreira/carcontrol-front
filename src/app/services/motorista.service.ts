import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoristaService {
  private apiUrl = 'http://localhost:8080/V1/motorista';

  constructor(private http: HttpClient) {}

  cadastrarMotorista(motorista: any): Observable<any> {
    const token = sessionStorage.getItem("auth-token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post(`${this.apiUrl}/cadastrar`, motorista, { headers });
  }

  listarMotoristas(): Observable<any> {
    const token = sessionStorage.getItem("auth-token");
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/listar`, { headers });
  }
}
