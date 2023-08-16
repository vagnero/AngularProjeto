import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDepartamentosComponent } from './lista-departamentos/lista-departamentos.component';
import { CadastrarDepartamentoComponent } from './cadastrar-departamento/cadastrar-departamento.component'; // Importe o novo componente
const routes: Routes = [
  { path: 'departamentos', component: ListaDepartamentosComponent },
  { path: 'cadastrar-departamento', component: CadastrarDepartamentoComponent }, // Adicione a rota
  { path: '', redirectTo: '/departamentos', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
