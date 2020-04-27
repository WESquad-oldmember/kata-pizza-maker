import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-maker',
  templateUrl: './pizza-maker.component.html',
  styleUrls: ['./pizza-maker.component.scss']
})
export class PizzaMakerComponent implements OnInit {

  pizza: any;

  constructor() { }

  ngOnInit() {
  }

  makePizza(name: string, pasta: string, toppings: string[]): any {
    this.pizza = { name, pasta, toppings };

    return this.pizza;
  }
}
