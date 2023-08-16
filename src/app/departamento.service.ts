import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  private baseUrl = 'https://localhost:7192/api'; // Altere a URL para corresponder à sua API

  constructor(private http: HttpClient) { }

  GetDepartamentos(): Observable<any[]> {
    return this.http.get<any[]>(`https://localhost:7192/api/Departamento`);
  }

  cadastrarDepartamento(departamento: any): Observable<any> {
    return this.http.post(`https://localhost:7192/api/Departamento`, departamento);
  }

}