import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartamentoService } from '../departamento.service';


@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css']
})
export class EditarDepartamentoComponent implements OnInit {

  departamentos: any[] = [];
  departamentoSelecionado: any = null;
  mostrarFormularioEdicao: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private departamentoService: DepartamentoService
  ) { }

  ngOnInit(): void {
    this.departamentoService.GetDepartamentos().subscribe(
      data => {
        this.departamentos = data;
      },
      error => {
        console.error('Erro ao obter departamentos:', error);
      }
    );
  }

  toggleFormularioEdicao(departamento: any): void {
    if (this.departamentoSelecionado === departamento) { //Se falso.
      this.departamentoSelecionado = null;
      this.mostrarFormularioEdicao = false;
    } else {
      this.departamentoSelecionado = departamento;
      this.mostrarFormularioEdicao = true;
    }
  }

  salvarEdicao(): void {
    this.departamentoService.editarDepartamento(this.departamentoSelecionado).subscribe(
      () => {
        // Redirecionar para a lista de departamentos após a edição
        this.router.navigate(['/editar-departamento/:id']);
      },
      error => {
        console.error('Erro ao editar departamento:', error);
      }
    );
  }
}