import { Component, OnInit } from '@angular/core';
import { Pizza } from '../models/pizza.model';

@Component({
  selector: 'app-pizza-maker',
  templateUrl: './pizza-maker.component.html',
  styleUrls: ['./pizza-maker.component.scss']
})
export class PizzaMakerComponent implements OnInit {

  pizza: Pizza;
  pizzaSizes = ['small', 'medium', 'large'];

  constructor() { }

  ngOnInit() {
  }

  makePizza(name: string, pasta: string, toppings: string[]): any {
    if (!pasta || !pasta.trim() || !this.pizzaSizes.includes(pasta)) {
      return;
    }

    if (toppings.length > 0) {
      this.pizza = { name, pasta, toppings };
    }

    return this.pizza;
  }
}
