import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../departamento.service';

@Component({
  selector: 'app-lista-departamentos',
  templateUrl: './lista-departamentos.component.html',
  styleUrls: ['./lista-departamentos.component.css']
})
export class ListaDepartamentosComponent implements OnInit {

  departamentos: any[] = [];
  mostrarDepartamentos: boolean = false; // Variável para controlar a visibilidade

  constructor(private departamentoService: DepartamentoService) { }

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
  alternarVisibilidade(): void {
    this.mostrarDepartamentos = !this.mostrarDepartamentos; // Inverte o valor da variável
  }

}