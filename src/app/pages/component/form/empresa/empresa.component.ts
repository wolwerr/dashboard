import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CepServico } from 'src/app/servicos/cep-servico.service';
import { Empresa } from 'src/app/models/empresa';
import { Cep } from 'src/app/models/cep';
import { EmpresaServico } from 'src/app/servicos/empresa-servico.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.scss']
})
export class EmpresaComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public empresa:Empresa = {} as Empresa
  public cep:Cep|undefined = {} as Cep
  public mensagem:string = ""

  public async salvar(){
    try{
      await new EmpresaServico(this.http).salvar(this.empresa)
      this.router.navigateByUrl("/home")
    }
    catch(e:any){
      this.mensagem = e.error.mensagem
    }
  }

  public async buscaViaCep(){
    this.cep = await new CepServico(this.http).getViaCep(this.empresa.cep)
    if(this.cep){
      this.empresa.rua = this.cep.logradouro
      this.empresa.bairro = this.cep.bairro
      this.empresa.cidade = this.cep.localidade
      this.empresa.estado = this.cep.uf
      this.empresa.numero
      this.empresa.cnpj
      this.empresa.razao
    }
  }

}
