import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo: string = 'La app de los campeones PEPEDS';
  numero: number = 22;

  base: number = 4;

  acumular(valor: number){
    this.numero +=valor;
  }
}
