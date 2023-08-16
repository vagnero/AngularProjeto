import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirDepartamentoComponent } from './excluir-departamento.component';

describe('ExcluirDepartamentoComponent', () => {
  let component: ExcluirDepartamentoComponent;
  let fixture: ComponentFixture<ExcluirDepartamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirDepartamentoComponent]
    });
    fixture = TestBed.createComponent(ExcluirDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
