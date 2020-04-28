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

  validateOrder(pizza: Pizza): boolean {
    if (!pizza.name || pizza.size == null || !(pizza.size in PizzaSize)) {
      return false;
    }

    return true;
  }

  makePizza(name: string, size: PizzaSize, toppings: string[]): any {

    this.pizza = { name, size, toppings };

    return this.pizza;
  }
}
