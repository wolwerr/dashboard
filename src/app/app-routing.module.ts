import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/component/form/cliente/cliente.component';
import { EmpresaComponent } from './pages/component/form/empresa/empresa.component';
import { HomeComponent } from './pages/component/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'formCliente', component: ClienteComponent },
  { path: 'formEmpresa', component: EmpresaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
