import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Empresa } from "../models/empresa";

export class EmpresaServico{
  constructor(private http: HttpClient){ }

  public async salvar(empresa:Empresa){
      await this.http.post<Empresa>(`${environment.apiHost}/empresa.json`, empresa).toPromise()
  }

  public async all(){
      return await this.http.get<Empresa[]>(`${environment.apiHost}/empresa.json`).toPromise()
  }
}
