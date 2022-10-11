import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <h1>{{ title }}</h1>

    <h3>La base es <strong>{{ base }}</strong> </h3>

    <button (click)="acumular(base)" >+{{ base }}</button>
    <span>{{ counter }}</span>
    <button (click)="acumular(-base)" >-{{ base }}</button>
  `
})

export class ContadorComponent {

  title   : string = 'Contador App';
  counter : number = 0;
  base    : number = 5;

  acumular( valor: number ) {
    this.counter += valor;
  }

}