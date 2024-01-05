import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from './usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.host + "usuario"

  constructor(private http: HttpClient) { }

  public salvar(usuario:Usuario):Observable<Usuario> {
   return this.http.post<Usuario>(this.url, usuario)
  }

  public delete(id:string): Observable<any> {
    return this.http.delete(this.url + "/" + id)
  }

  public getUsuario():Usuario{
    let usuario = new Usuario()
    usuario.nome = "Maiamona"
    usuario.email ="manomona2@hotmail.com"
  return usuario   
  }

  public listaUsuario():Observable<Usuario[]>{
  return  this.http.get<Usuario[]>(this.url)
  }
}
