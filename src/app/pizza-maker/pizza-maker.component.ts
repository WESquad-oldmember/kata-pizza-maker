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
  readonly prepareDuration = 3;
  readonly sauceDuration = .5;
  readonly bakeMinDuration = 10;
  readonly bakeMaxDuration = 15;
  readonly packagingDuration = .25;
  readonly toppingsDuration = .5;

  order: Order;

  constructor() {
    this.order = new Order();
  }

  ngOnInit() {
  }

  validateOrder(pizza: Pizza): Order {
    this.order.isValid = this.isValidPizzaName(pizza.name) && this.isValidPizzaSize(pizza.size);

    if (this.order.isValid) {
      this.makePizza(pizza);
    }

    return this.order;
  }

  makePizza(pizza: Pizza): Order {
    if (this.order.isValid) {
      this.order.pizza = pizza;
    }

    this.order.isBeingMade = this.order.isValid;

    return this.order;
  }

  getEstimatedTime(fakeOrder: Order): string {
    let estimatedTime = this.prepareDuration + this.sauceDuration + this.packagingDuration;

    if (fakeOrder.pizza.toppings && fakeOrder.pizza.toppings.length > 0) {
      estimatedTime += this.toppingsDuration;
    }

    return `Your order will be ready in about `
      + `${Math.trunc(estimatedTime + this.bakeMinDuration)}:${((estimatedTime + this.bakeMinDuration) % 1) * 60}`
      + ` to ${Math.trunc(estimatedTime + this.bakeMaxDuration)}:${((estimatedTime + this.bakeMaxDuration) % 1) * 60}`
      + ` minutes`;
  }


  private isValidPizzaName(pizzaName: PizzaType) {
    return pizzaName != null && (Object.values(PizzaType).includes(pizzaName));
  }

  private isValidPizzaSize(pizzaSize: PizzaSize) {
    return pizzaSize != null && (Object.values(PizzaSize).includes(pizzaSize));
  }
}
