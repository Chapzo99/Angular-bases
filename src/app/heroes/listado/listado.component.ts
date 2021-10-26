import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {


  ultimoBorrado: string= "";
  heroes: string[] = ["El tetoncito", "Marroquin", "ItsBobito", "Yuyas cabullas", "Chapzorra", "Luchimbo"]
  constructor() {
    console.log("constructor");
   }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

  borrarHeroe(){
    // this.heroes.splice(Math.floor(Math.random() * this.heroes.length),1)

    let heroeBorrado = this.heroes.shift() || '';
    this.ultimoBorrado = heroeBorrado?.toString();

  }
}
