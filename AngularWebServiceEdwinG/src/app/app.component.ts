import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colores = ['blanco', 'rojo','negro'];
  toggleList = true;

  addColor(varColor){
    console.log(varColor.value);
    this.colores.push(varColor.value);
    varColor.value="";
    return false;
  }

  funcionMostrar(){
    this.toggleList = !this.toggleList;
  }
}