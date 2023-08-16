import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import {PaginaInicialComponent} from './pagina-inicial/pagina-inicial.component' //Importa o componente!
import { ListaDepartamentosComponent } from './lista-departamentos/lista-departamentos.component';
import { CadastrarDepartamentoComponent } from './cadastrar-departamento/cadastrar-departamento.component'; // Importe o novo componente
import { EditarDepartamentoComponent } from './editar-departamento/editar-departamento.component';
import { ExcluirDepartamentoComponent } from './excluir-departamento/excluir-departamento.component';
const routes: Routes = [
  { path: 'pagina-inicial', component: PaginaInicialComponent  }, //Adiciona a rota!
  { path: 'departamentos', component: ListaDepartamentosComponent },
  { path: 'cadastrar-departamento', component: CadastrarDepartamentoComponent },
  { path: 'editar-departamento/:id', component: EditarDepartamentoComponent },
  { path: 'excluir-departamento/:id', component: ExcluirDepartamentoComponent },
  { path: '', redirectTo: '/departamentos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
