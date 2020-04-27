import { PizzaSize } from './../models/pizza-sizes.enum';
import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';

@Component({
  selector: 'app-pizza-maker',
  templateUrl: './pizza-maker.component.html',
  styleUrls: ['./pizza-maker.component.scss']
})
export class PizzaMakerComponent implements OnInit {

  pizza: Pizza;

  constructor() { }

  ngOnInit() {
  }

  makePizza(name: string, pasta: PizzaSize, toppings: string[]): any {
    if (pasta == null) {
      return;
    }

    if (toppings.length > 0) {
      this.pizza = { name, pasta, toppings };
    }

    return this.pizza;
  }
}
