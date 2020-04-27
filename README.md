# Kata Pizza Maker!

![travis-ci](https://travis-ci.com/WESquad-spires/kata-pizza-maker.svg?branch=master)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

---
---

## Kata pizza factory instructions

### **Problem description**
Create a program which acts as a pizzeria, so that given an order from a customer, pizzas are made for delivery.

### **Factory**
Here is the pricing of pizza per type and size:

| Pizza \ Size  | Small | Medium | Large |
| ------------- | ----- | ------ | ----- |
| Indi Tandoori | 11 €  |  16 €  | 21 €  |
| 4 cheeses     | 11 €  |  16 €  | 21 €  |
| Peperoni      | 10 €  |  15 €  | 19 €  |
| Mexican       | 11 €  |  16 €  | 21 €  |
| Vegetarian    |  9 €  |  13 €  | 26 €  |

The customer can add toppings if he wishes.

Toppings are:

- Cheeses (Mozzarella, Ricotta, Feta, Parmesan, Cheddar, Monterey
    + +2 € per topping
- Vegetables (carrot, tomatoes, mushrooms, onions, olives, beans, peppers, spinach)
    + +1 € per topping
- Nuts (almonds, peanuts, pistachios, pine nuts, walnuts)
    + +1 € per topping
- Herbs and Spices (basil, coriander, garlic, oregano, pepper, rosemary)
    + +1 € per topping
- Sea Food (anchovies, lobster, shrimps, salmon, squid, tuna, oysters)
    + +3 € per topping
- Meats (bacon, ham, salami, meatballs, duck, chicken, barbequed meat)
    + +2 € per topping

There are 5 steps in making pizzas:

1. prepare pizza - 3 minutes per pizza
1. add sauce - 30 secondes per pizza
1. add toppings - 30 secondes per pizza
1. bake - 10 to 15 minutes
1. packaging - 15 seconds per pizza

When an order is being validated by the ordering manager, the factory will start making pizzas for that order. One order may have maximum 5 pizzas.

### **Requirements**

It is required to:
- make pizzas when an order is validated
- validate orders
- show estimated time for readyness
- show progress of pizza making

Further requirements:
- define price for pizzas
- show total price
- show details of an order
- the business owner wants to provide delivery service
- the customer may customize a pizza

---
---

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
