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

    if (pizza.name == null || !(Object.values(PizzaType).includes(pizza.name))
      || pizza.size == null || !(Object.values(PizzaSize).includes(pizza.size))) {
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
}
