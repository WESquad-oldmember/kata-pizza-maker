import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaSize } from './../models/pizza-sizes.enum';

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

  makePizza(name: string, pizzaSize: PizzaSize, toppings: string[]): any {
    if (pizzaSize == null || !(pizzaSize in PizzaSize)) {
      return;
    }

    if (toppings.length > 0) {
      this.pizza = { name, pizzaSize, toppings };
    }

    return this.pizza;
  }
}
