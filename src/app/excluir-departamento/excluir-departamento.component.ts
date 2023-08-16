import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from '../departamento.service';
@Component({
  selector: 'app-excluir-departamento',
  templateUrl: './excluir-departamento.component.html',
  styleUrls: ['./excluir-departamento.component.css']
})
export class ExcluirDepartamentoComponent implements OnInit {

  departamentos: any[] = []; // Lista de departamentos
  mostrarMensagemExclusao: boolean = false;
  departamentoSelecionado: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departamentoService: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.departamentoService.GetDepartamentos().subscribe(data => {
      this.departamentos = data;
    });
  }

  exibirMensagemExclusao(departamento: any): void {
    this.mostrarMensagemExclusao = true;
    this.departamentoSelecionado = departamento;
  }

  excluirDepartamento(): void {
    if (this.departamentoSelecionado) {
      this.departamentoService.excluirDepartamento(this.departamentoSelecionado.id).subscribe(
        () => {
          this.router.navigate(['/departamentos']);
        },
        error => {
          console.error('Erro ao excluir departamento:', error);
        }
      );
    }
  }
}