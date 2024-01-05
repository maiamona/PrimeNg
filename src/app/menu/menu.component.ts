import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

 items: MenuItem[]=[];
  

  ngOnInit() {
    this.items = [
            {
                label: 'Home',
                items: [{
                        label: 'Home', 
                        icon: 'pi pi-fw pi-home',
                        routerLink: 'home'
                    },
                    
                ]
            },
            {
                label: 'Usuario',
                icon: 'pi pi-fw pi-user',
                routerLink: 'usuario'
      },
            {
                label: 'Estados',
                icon: 'pi pi-fw pi-map',
                routerLink: 'estados'
      }
     
        ]; 
  }
}
