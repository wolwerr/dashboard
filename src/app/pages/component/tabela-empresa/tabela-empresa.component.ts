import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa';
import { EmpresaServico } from 'src/app/servicos/empresa-servico.service';

@Component({
  selector: 'app-tabela-empresa',
  templateUrl: './tabela-empresa.component.html',
  styleUrls: ['./tabela-empresa.component.scss']
})
export class TabelaEmpresaComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscaEmpresaApi()
  }

  private async buscaEmpresaApi() {
    this.empresas = await new EmpresaServico(this.http).all()
  }

  public empresas:Empresa[]|undefined

}
