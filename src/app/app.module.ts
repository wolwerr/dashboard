import { SharedModule } from './shared/shared.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/component/home/home.component';
import { EmpresaComponent } from './pages/component/form/empresa/empresa.component';
import { ClienteComponent } from './pages/component/form/cliente/cliente.component';
import { HttpClientModule  } from '@angular/common/http';
import { TabelaClienteComponent } from './pages/component/tabela-cliente/tabela-cliente.component';
import { TabelaEmpresaComponent } from './pages/component/tabela-empresa/tabela-empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpresaComponent,
    ClienteComponent,
    TabelaClienteComponent,
    TabelaEmpresaComponent,

  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
