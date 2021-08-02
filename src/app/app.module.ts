import { UsuarioService } from './usuario.service';
import { EstadosService } from './estados.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {MenubarModule} from 'primeng/menubar';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { RouterModule } from '@angular/router';
import { Usuario } from './usuario/usuario';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    MenubarModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AccordionModule,
    RouterModule,
    ReactiveFormsModule,
    
  ],
  providers: [Usuario],
  bootstrap: [AppComponent]
})
export class AppModule { }
