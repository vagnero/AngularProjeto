import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario  } from './lista-departamentos/funcionario.model';

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
    const { nome, sigla } = departamento;
    const body = { nome, sigla };
    return this.http.post(`https://localhost:7192/api/Departamento`, body);
  }

  editarDepartamento(departamento: any): Observable<any> {
    return this.http.put<any>(`https://localhost:7192/api/Departamento/${departamento.id}`, departamento);
  }
 
  excluirDepartamento(id: number): Observable<any> {
    return this.http.delete<any>(`https://localhost:7192/api/Departamento/${id}`);
  }

  cadastrarFuncionarios(funcionario: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Funcionario/Funcionarios`, funcionario);
  }
  listarFuncionariosPorDepartamento(departamentoId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Departamento/Funcionarios?id=${departamentoId}`);
  }
  getFuncionariosPorDepartamento(departamentoId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Departamento/Funcionarios?id=${departamentoId}`);
  }

  deletarFuncionario(funcionarioId: number): Observable<void> {
    const url = `https://localhost:7192/api/Funcionario/${funcionarioId}`;
    return this.http.delete<void>(url);
  }

  editarFuncionario(funcionario: Funcionario): Observable<void> {
    const url = `https://localhost:7192/api/Funcionario/${funcionario.id}`;
    return this.http.put<void>(url, funcionario);
  }

  atualizarFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    const url = `https://localhost:7192/api/Funcionario/${funcionario.id}`;
    return this.http.put<Funcionario>(url, funcionario);
  }
  

}
