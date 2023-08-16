import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../departamento.service';

@Component({
  selector: 'app-cadastrar-departamento',
  templateUrl: './cadastrar-departamento.component.html',
  styleUrls: ['./cadastrar-departamento.component.css']
})
export class CadastrarDepartamentoComponent implements OnInit {

  novoDepartamento: any = {
    nome: '',
    sigla: ''
  };

  constructor(private departamentoService: DepartamentoService) { }

  ngOnInit(): void {
  }

  cadastrar(): void {
    this.departamentoService.cadastrarDepartamento(this.novoDepartamento).subscribe(
      response => {
        console.log('Departamento cadastrado com sucesso!', response);
        // Limpar o formulário após o cadastro
        this.novoDepartamento = { nome: '', sigla: '' };
      },
      error => {
        console.error('Erro ao cadastrar departamento:', error);
      }
    );
  }
}