import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDepartamentosComponent } from './lista-departamentos/lista-departamentos.component';
import { DepartamentoService } from './departamento.service';
import { CadastrarDepartamentoComponent } from './cadastrar-departamento/cadastrar-departamento.component'; // Importe o serviço
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListaDepartamentosComponent,
    CadastrarDepartamentoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
  ],
  providers: [DepartamentoService], // Adicione o serviço aos providers
  bootstrap: [AppComponent]
})
export class AppModule { }