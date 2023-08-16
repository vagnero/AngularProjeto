import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from '../departamento.service';
import { Funcionario } from './funcionario.model';
@Component({
  selector: 'app-lista-departamentos',
  templateUrl: './lista-departamentos.component.html',
  styleUrls: ['./lista-departamentos.component.css']
})
export class ListaDepartamentosComponent implements OnInit {
  departamentoSelecionado: any = null;
  departamentos: any[] = [];
  mostrarLista: boolean = true; // Variável para controlar a visibilidade
  mostrarCadastro: boolean = false;
  departamentoSelecionadoId: number | null = null;

  funcionarios: any[] = [];
  mostrarFuncionarios: boolean = false;

  novoFuncionario: any = {
    nome: '',
    foto: '',
    rg: '',
    departamentoId: null
  };

  funcionarioSelecionado: Funcionario | null = null; // Adicione esta propriedade

  constructor( private route: ActivatedRoute,
    private router: Router,
    private departamentoService: DepartamentoService) { }

  ngOnInit(): void {

    this.listarDepartamentos();
  }
  listarDepartamentos(): void {
    this.departamentoService.GetDepartamentos().subscribe(
      data => {
        this.departamentos = data;
      },
      error => {
        console.error('Erro ao obter departamentos:', error);
      }
    );
  }
  alternarVisibilidade(componente: string): void {
    if (componente === 'lista') {
      this.mostrarLista = true;
      this.mostrarCadastro = false;
    } else if (componente === 'cadastro') {
      this.mostrarLista = false;
      this.mostrarCadastro = true;
    }
  }
  carregarFuncionarios(departamentoId: number): void {
    if (this.departamentoSelecionadoId === departamentoId) {
      this.departamentoSelecionadoId = null; // Se já estava selecionado, desseleciona
    } else {
      this.departamentoService.getFuncionariosPorDepartamento(departamentoId).subscribe(funcionarios => {
        this.departamentos.find(dep => dep.id === departamentoId).funcionarios = funcionarios;
        this.departamentoSelecionadoId = departamentoId;
      });
    }
  }
  exibirFuncionarios(departamento: any): void {
    this.mostrarFuncionarios = true;
    this.departamentoSelecionado = departamento;

    this.departamentoService.getFuncionariosPorDepartamento(departamento.id).subscribe(
      data => {
        this.funcionarios = data;
      },
      error => {
        console.error('Erro ao obter funcionários:', error);
      }
    );
  }
  



  cadastrarFuncionario(): void {
    this.novoFuncionario.departamentoId = this.departamentoSelecionado.id;

    this.departamentoService.cadastrarFuncionarios(this.novoFuncionario).subscribe(
      () => {
        // Limpar o formulário após o cadastro
        this.novoFuncionario = { nome: '', foto: '', rg: '', departamentoId: null };

        // Recarregar a lista de funcionários
        this.exibirFuncionarios(this.departamentoSelecionado);
      },
      error => {
        console.error('Erro ao cadastrar funcionário:', error);
      }
    );
  }

  deletarFuncionario(funcionarioId: number): void {
    this.departamentoService.deletarFuncionario(funcionarioId).subscribe(
      () => {
        // Atualize a lista de funcionários após a deleção
        this.funcionarios = this.funcionarios.filter(f => f.id !== funcionarioId);
      },
      (error: any) => { // ou (error: HttpErrorResponse)
        console.error('Erro ao deletar funcionário:', error);
      }
    );
  }

  editarFuncionario(funcionario: Funcionario) {
    this.funcionarioSelecionado = { ...funcionario }; // Copia o objeto para evitar problemas de referência
  }
  exibirFormularioEdicao(funcionario: Funcionario): void {
    this.funcionarioSelecionado = { ...funcionario };
  }
  
  salvarEdicaoFuncionario(): void {
    if (this.funcionarioSelecionado) {
      this.departamentoService.atualizarFuncionario(this.funcionarioSelecionado).subscribe(
        (funcionarioAtualizado) => {
          // Atualizar a lista de funcionários com o funcionário editado
          const index = this.funcionarios.findIndex(f => f.id === funcionarioAtualizado.id);
          if (index !== -1) {
            this.funcionarios[index] = funcionarioAtualizado;
          }
  
          this.funcionarioSelecionado = null; // Limpar o funcionário selecionado
        },
        (error) => {
          console.error('Erro ao atualizar funcionário:', error);
        }
      );
    }
  }
}
