import { EstadosService } from './../estados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estados',
  templateUrl: './estados.component.html',
  styleUrls: ['./estados.component.scss']
})
export class EstadosComponent implements OnInit {

  estados:any
  constructor(private estadosService:EstadosService) { }

  ngOnInit() {
    this.estadosService.getEstados().subscribe(
      response => {
       this.estados = response 
      }
    )
  }

}
