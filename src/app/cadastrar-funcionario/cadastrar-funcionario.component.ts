import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from '../departamento.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent {
  novoFuncionario = {
    nome: '',
    foto: '',
    rg: '',
    departamentoId: 0 // Deixe 0 por enquanto, você preencherá isso ao selecionar um departamento
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departamentoService: DepartamentoService
  ) { }

  cadastrarFuncionario() {
    this.departamentoService.cadastrarFuncionarios(this.novoFuncionario).subscribe(() => {
      // Lógica para lidar com o sucesso do cadastro
      console.log('Funcionário cadastrado com sucesso!');
      this.novoFuncionario = {
        nome: '',
        foto: '',
        rg: '',
        departamentoId: 0
      };
    }, error => {
      // Lógica para lidar com erros
      console.error('Erro ao cadastrar funcionário:', error);
    });
  }
}