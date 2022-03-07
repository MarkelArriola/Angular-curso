import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes : string [] = ['spiderman', 'ironman','thor','capitan america'];
   heroeBorrado : string = '';
  borrarHeroes(){
    
    this.heroeBorrado=  this.heroes.shift() || '';
      
  }

}
