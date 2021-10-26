import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
        <h1>{{titulo}}</h1>
        <h3>La base es: <b>{{base}}</b></h3>


        <button (click)="acumular(base)"> + {{base}}</button>
        <span>{{numero}}</span>

        <button (click)="acumular(-base)"> - {{base}}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'La app de los campeones PEPEDS';
  numero: number = 22;

  base: number = 4;

  acumular(valor: number){
    this.numero +=valor;
  }
}
