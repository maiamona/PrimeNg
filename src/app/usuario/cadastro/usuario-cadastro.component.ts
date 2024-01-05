import { UsuarioService } from './../../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['../usuario.component.scss']
})
export class UsuarioCadastroComponent implements OnInit {

   public usuario: Usuario = new Usuario();
  
  constructor(private usuarioservice:UsuarioService, private router: Router) { }

  ngOnInit() {
   
  }

  public salvar() {
    this.usuarioservice.salvar(this.usuario).subscribe(
      response => {
        alert("salvo com sucesso");
        this.router.navigate(['usuario']);
      },
      erro => {
        alert("Aconteceu algo de errado");
      }
    )
   
  }

}