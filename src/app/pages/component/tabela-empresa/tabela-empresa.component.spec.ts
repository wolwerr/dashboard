import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaEmpresaComponent } from './tabela-empresa.component';

describe('TabelaEmpresaComponent', () => {
  let component: TabelaEmpresaComponent;
  let fixture: ComponentFixture<TabelaEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
