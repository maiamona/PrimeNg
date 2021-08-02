

import { UsuarioComponent } from './usuario.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UsuarioCadastroComponent } from './cadastro/usuario-cadastro.component';


const routes: Routes = [
  {path: '', component: UsuarioComponent},
  {path: 'add', component: UsuarioCadastroComponent}
]

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
  
})
export class UsuarioRoutingModule { }
