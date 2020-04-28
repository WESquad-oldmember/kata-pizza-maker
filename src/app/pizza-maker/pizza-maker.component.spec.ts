import { TestBed } from '@angular/core/testing';
import { PizzaSize } from '../models/pizza-size.enum';
import { Order } from './../models/order.model';
import { PizzaType } from './../models/pizza-type.enum';
import { Pizza } from './../models/pizza.model';
import { PizzaMakerComponent } from './pizza-maker.component';

describe('PizzaMakerComponent', () => {
  let componentUnderTest: PizzaMakerComponent;
  let actualResult: any;
  let fakeOrder: Order;
  let fakePizza: Pizza;
  let name: string;
  let size: PizzaSize;
  let toppings: string[];

  Given(() => {
    TestBed.configureTestingModule({
      providers: [PizzaMakerComponent]
    });
    componentUnderTest = TestBed.get(PizzaMakerComponent);

    actualResult = undefined;
    name = undefined;
    size = undefined;
    toppings = undefined;
    fakeOrder = new Order();
    fakePizza = undefined;
  });

  describe('METHOD: validateOrder', () => {
    When(() => {
      actualResult = componentUnderTest.validateOrder(fakePizza);
    });

    describe('GIVEN pizza name is missing THEN the order is not validated', () => {
      Given(() => {
        fakePizza = {
          name: null,
          size: PizzaSize.MEDIUM,
          toppings: ['some', 'fake', 'toppings']
        };
      });

      Then(() => {
        expect(actualResult.isValid).toBe(false);
      });
    });

    describe('GIVEN pizza size is incorrect THEN the order is not validated', () => {
      describe('Pizza size is null', () => {
        Given(() => {
          fakePizza = {
            name: PizzaType.Vegetarian,
            size: null,
            toppings: ['some', 'fake', 'toppings']
          };
        });

        Then(() => {
          expect(actualResult.isValid).toBe(false);
        });
      });
    });

    describe('GIVEN a known pizza name and size THEN the order is validated', () => {
      Given(() => {
        fakePizza = {
          name: PizzaType.IndiTandoori,
          size: PizzaSize.MEDIUM,
          toppings: []
        };
      });
      Then(() => {
        expect(actualResult.isValid).toBe(true);
      });
    });
  });

  describe('METHOD: makePizza', () => {
    When(() => {
      fakeOrder.pizza = {
        name: PizzaType.FourCheeses,
        size: PizzaSize.MEDIUM,
        toppings: []
      };
      actualResult = componentUnderTest.makePizza(fakeOrder.pizza);
    });
    Then(() => {
      expect(actualResult).toBeTruthy();
    });

    describe('GIVEN order has been validated THEN make the pizza', () => {
      Given(() => {
        componentUnderTest.order.isValid = true;
      });
      Then(() => {
        expect(actualResult.isBeingMade).toBeTruthy();
      });
    });

    describe('GIVEN order is not valid THEN do not make the pizza', () => {
      Given(() => {
        componentUnderTest.order.isValid = false;
      });
      Then(() => {
        expect(actualResult.isBeingMade).toBeFalsy();
      });
    });
  });

  describe('EVENT: Order validated > make pizza', () => {
    describe('GIVEN an order is validated THEN make a pizza with this order', () => {
      Given(() => {
        fakeOrder = {
          pizza: {
            name: PizzaType.FourCheeses,
            size: PizzaSize.LARGE,
            toppings: ['some topping']
          }
        };
        actualResult = componentUnderTest.validateOrder(fakeOrder.pizza);
      });

      Then(() => {
        expect(actualResult.isBeingMade).toBe(true);
      });
    });
  });

  describe('METHOD: getEstimatedTime', () => {
    describe('GIVEN an order is being made THEN get the estimated time for readyness', () => {
      const expectedTime = 'Between 13:45 and 18:45';

      Given(() => {
        fakeOrder = {
          pizza: {
            name: PizzaType.Mexican,
            size: PizzaSize.MEDIUM,
            toppings: []
          }
        };
      });

      When(() => {
        actualResult = componentUnderTest.getEstimatedTime(fakeOrder);
      });

      Then(() => {
        expect(actualResult).toEqual(expectedTime);
      });
    });

    // TODO : write test
    xdescribe('GIVEN an order is being made THEN get the estimated time for readyness', () => {
      Given(() => {
        // an order is being made
      });
      Then(() => {
        // get the estimated time for readyness
      });
    });
  });
});
