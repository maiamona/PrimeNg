import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {

  url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
  constructor(private http: HttpClient) { }

  getEstados(): Observable<any>{
    return this.http.get<any>(this.url);
    
  }
}
