
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: 'home', loadChildren: ()=>import('./home/home.module').then(m=>m.HomeModule) },
  { path: 'usuario', loadChildren : ()=>import('./usuario/usuario.module').then(m=>m.UsuarioModule) },
  { path: 'estados', loadChildren : ()=>import('./estados/estados.module').then(m=>m.EstadosModule) },
  {path: '', pathMatch: 'full', redirectTo: '/home'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
