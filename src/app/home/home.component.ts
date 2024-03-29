import { UsuarioService } from './../usuario.service';
import { Usuario } from '../usuario/usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(private usuarioService: UsuarioService, public usuario: Usuario ) { }
  title = '';
  value: number = 0;
  mona:number = 0;
  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
    this.title = 'Maiamona';
    
  }

}
