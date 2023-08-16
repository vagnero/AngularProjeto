import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDepartamentosComponent } from './lista-departamentos/lista-departamentos.component';
import { DepartamentoService } from './departamento.service';
import { CadastrarDepartamentoComponent } from './cadastrar-departamento/cadastrar-departamento.component'; // Importe o serviço
import { FormsModule } from '@angular/forms';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { EditarDepartamentoComponent } from './editar-departamento/editar-departamento.component';
import { ExcluirDepartamentoComponent } from './excluir-departamento/excluir-departamento.component';
import { CadastrarFuncionarioComponent } from './cadastrar-funcionario/cadastrar-funcionario.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaDepartamentosComponent,
    CadastrarDepartamentoComponent,
    PaginaInicialComponent,
    EditarDepartamentoComponent,
    ExcluirDepartamentoComponent,
    CadastrarFuncionarioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DepartamentoService], // Adicione o serviço aos providers
  bootstrap: [AppComponent]
})
export class AppModule { }