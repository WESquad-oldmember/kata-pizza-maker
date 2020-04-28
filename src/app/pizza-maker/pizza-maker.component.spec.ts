import { TestBed } from '@angular/core/testing';
import { PizzaSize } from './../models/pizza-sizes.enum';
import { Pizza } from './../models/pizza.model';
import { PizzaMakerComponent } from './pizza-maker.component';

describe('PizzaMakerComponent', () => {
  let componentUnderTest: PizzaMakerComponent;
  let actualResult: any;
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
    fakePizza = undefined;
  });

  describe('METHOD: validateOrder', () => {
    When(() => {
      actualResult = componentUnderTest.validateOrder(fakePizza);
    });

    describe('GIVEN toppings are missing THEN the order is not validated', () => {
      Given(() => {
        fakePizza = {
          name: 'fake name',
          size: PizzaSize.MEDIUM,
          toppings: []
        };
      });

      Then(() => {
        expect(actualResult).toBeFalsy();
      });
    });

    describe('GIVEN pizza size is incorrect THEN the order is not validated', () => {
      describe('Pizza size is null', () => {
        Given(() => {
          fakePizza = {
            name: 'fake name',
            size: null,
            toppings: ['some', 'fake', 'toppings']
          };
        });

        Then(() => {
          expect(actualResult).toBeFalsy();
        });
      });

      describe('GIVEN pizza size is not known size THEN the order is not validated', () => {
        Given(() => {
          fakePizza = {
            name: 'fake name',
            size: -999,
            toppings: ['some', 'fake', 'toppings']
          };
        });
        Then(() => {
          expect(actualResult).toBeFalsy();
        });
      });
    });

    describe('GIVEN a pizza name, size THEN the order is validated', () => {
      Given(() => {
        fakePizza = {
          name: 'fake name',
          size: PizzaSize.MEDIUM,
          toppings: []
        };
      });
      Then(() => {
        expect(actualResult).toBeTruthy();
      });
    });
  });

  describe('METHOD: makePizza', () => {
    When(() => {
      actualResult = componentUnderTest.makePizza(name, size, toppings);
    });

    describe('GIVEN all necessary ingredients THEN a pizza is created', () => {
      describe('GIVEN a set of toppings for mexican pizza THEN a mexican pizza should be created', () => {
        Given(() => {
          name = 'Mexican Pizza';
          size = PizzaSize.SMALL;
          toppings = ['tomato sauce', 'meat', 'pepperoni', 'pineapple', 'pepper', 'cheddar', 'hot sauce'];
        });

        Then(() => {
          expect(actualResult.name).toBe('Mexican Pizza');
          expect(actualResult.size).toBe(PizzaSize.SMALL);
          expect(actualResult.toppings).toEqual(['tomato sauce', 'meat', 'pepperoni', 'pineapple', 'pepper', 'cheddar', 'hot sauce']);
        });
      });

      describe('GIVEN  a set of 4 seasons ingredients THEN a 4 seasons pizza should be created', () => {
        Given(() => {
          name = '4 Seasons Pizza';
          size = PizzaSize.SMALL;
          toppings = ['pâte', 'sauce', 'oeuf', 'épinard', 'poivron', 'fromage cheddar', 'vinaigre balsamique'];
        });
        Then(() => {
          // it should make a 4 seasons pizza
          expect(actualResult.name).toBe('4 Seasons Pizza');
          expect(actualResult.size).toBe(PizzaSize.SMALL);
          expect(actualResult.toppings).toEqual(['pâte', 'sauce', 'oeuf', 'épinard', 'poivron', 'fromage cheddar', 'vinaigre balsamique']);
        });
      });
    });


  });
});
