import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario.component';
import { NgModule } from '@angular/core';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


@NgModule({
  declarations: [ UsuarioComponent, UsuarioCadastroComponent ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FormsModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ConfirmDialogModule
 
  ],
  providers: []
})
export class UsuarioModule { }
