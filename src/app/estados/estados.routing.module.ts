import { EstadosComponent } from './estados.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [
  {path: '', component: EstadosComponent}
]

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
  
})
export class EstadosRoutingModule { }
