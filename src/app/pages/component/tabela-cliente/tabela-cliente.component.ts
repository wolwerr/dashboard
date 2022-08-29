import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClienteServico } from 'src/app/servicos/cliente-servico.service';

@Component({
  selector: 'app-tabela-cliente',
  templateUrl: './tabela-cliente.component.html',
  styleUrls: ['./tabela-cliente.component.scss']
})
export class TabelaClienteComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.buscaClienteApi()
  }

  private async buscaClienteApi() {
    this.clientes = await new ClienteServico(this.http).all()
  }

  public clientes:Cliente[]|undefined

}
