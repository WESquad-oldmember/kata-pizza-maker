import { Component, OnInit } from '@angular/core';
import { PizzaSize } from '../models/pizza-size.enum';
import { Pizza } from '../models/pizza.model';
import { Order } from './../models/order.model';
import { PizzaType } from './../models/pizza-type.enum';

@Component({
  selector: 'app-pizza-maker',
  templateUrl: './pizza-maker.component.html',
  styleUrls: ['./pizza-maker.component.scss']
})
export class PizzaMakerComponent implements OnInit {

  order: Order;

  constructor() {
    this.order = new Order();
  }

  ngOnInit() {
  }

  validateOrder(pizza: Pizza): Order {
    if (this.isValidPizzaName(pizza.name) || this.isValidPizzaSize(pizza.size)) {
      this.order.isValid = false;
    } else {
      this.order.isValid = true;
      this.makePizza(pizza);
    }

    return this.order;
  }

  makePizza(pizza: Pizza): Order {
    if (this.order.isValid) {
      this.order.pizza = pizza;
      this.order.isBeingMade = true;
    } else {
      this.order.isBeingMade = false;
    }

    return this.order;
  }

  getEstimatedTime(fakeOrder: Order): string {
    const prepareTime = 3;
    const sauceTime = .5;
    const bakeMinTime = 10;
    const bakeMaxTime = 15;
    const packagingTime = .25;
    const toppingsTime = .5;

    let estimatedTime = prepareTime + sauceTime + packagingTime;

    if (fakeOrder.pizza.toppings && fakeOrder.pizza.toppings.length > 0) {
      estimatedTime += toppingsTime;
    }

    return `Between ${Math.trunc(estimatedTime + bakeMinTime)}:${((estimatedTime + bakeMinTime) % 1) * 60}`
      + ` and ${Math.trunc(estimatedTime + bakeMaxTime)}:${((estimatedTime + bakeMaxTime) % 1) * 60}`;
  }


  private isValidPizzaName(pizzaName: PizzaType) {
    return pizzaName == null || !(Object.values(PizzaType).includes(pizzaName));
  }

  private isValidPizzaSize(pizzaSize: PizzaSize) {
    return pizzaSize == null || !(Object.values(PizzaSize).includes(pizzaSize));
  }
}
