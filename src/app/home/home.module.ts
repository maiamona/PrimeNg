import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { KnobModule } from 'primeng/knob';
import { FormsModule } from "@angular/forms";
import {GMapModule} from 'primeng/gmap';


@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    KnobModule,
    FormsModule,
    GMapModule
  ],
  providers: []
})
export class HomeModule { }
