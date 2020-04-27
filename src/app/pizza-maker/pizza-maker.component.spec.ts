import { TestBed } from '@angular/core/testing';
import { PizzaSize } from './../models/pizza-sizes.enum';
import { PizzaMakerComponent } from './pizza-maker.component';

describe('PizzaMakerComponent', () => {
  let componentUnderTest: PizzaMakerComponent;
  let actualResult: any;
  let pizzaName: string;
  let pizzaSize: PizzaSize;
  let toppings: string[];

  Given(() => {
    TestBed.configureTestingModule({
      providers: [PizzaMakerComponent]
    });
    componentUnderTest = TestBed.get(PizzaMakerComponent);

    actualResult = undefined;
    pizzaName = undefined;
    pizzaSize = undefined;
    toppings = undefined;
  });

  describe('METHOD: makePizza', () => {
    When(() => {
      actualResult = componentUnderTest.makePizza(pizzaName, pizzaSize, toppings);
    });

    describe('GIVEN all necessary ingredients THEN a pizza is created', () => {
      describe('GIVEN a set of toppings for mexican pizza THEN a mexican pizza should be created', () => {
        Given(() => {
          pizzaName = 'Mexican Pizza';
          pizzaSize = PizzaSize.SMALL;
          toppings = ['tomato sauce', 'meat', 'pepperoni', 'pineapple', 'pepper', 'cheddar', 'hot sauce'];
        });

        Then(() => {
          expect(actualResult.name).toBe('Mexican Pizza');
          expect(actualResult.pizzaSize).toBe(PizzaSize.SMALL);
          expect(actualResult.toppings).toEqual(['tomato sauce', 'meat', 'pepperoni', 'pineapple', 'pepper', 'cheddar', 'hot sauce']);
        });
      });

      describe('GIVEN  a set of 4 seasons ingredients THEN a 4 seasons pizza should be created', () => {
        Given(() => {
          pizzaName = '4 Seasons Pizza';
          pizzaSize = PizzaSize.SMALL;
          toppings = ['pâte', 'sauce', 'oeuf', 'épinard', 'poivron', 'fromage cheddar', 'vinaigre balsamique'];
        });
        Then(() => {
          // it should make a 4 seasons pizza
          expect(actualResult.name).toBe('4 Seasons Pizza');
          expect(actualResult.pizzaSize).toBe(PizzaSize.SMALL);
          expect(actualResult.toppings).toEqual(['pâte', 'sauce', 'oeuf', 'épinard', 'poivron', 'fromage cheddar', 'vinaigre balsamique']);
        });
      });
    });

    describe('GIVEN toppings are missing THEN no pizza is created', () => {
      Given(() => {
        pizzaName = 'fake name';
        pizzaSize = PizzaSize.MEDIUM;
        toppings = [];
      });

      Then(() => {
        expect(actualResult).toBeFalsy();
      });
    });

    describe('GIVEN pizza size is incorrect THEN no pizza is created', () => {

      describe('GIVEN pizza size is null THEN no pizza for you', () => {
        Given(() => {
          pizzaName = 'fake name';
          pizzaSize = null;
          toppings = ['some', 'fake', 'toppings'];
        });

        Then(() => {
          expect(actualResult).toBeFalsy();
        });
      });

      describe('GIVEN pizza size is of unknown size THEN no pizza for you', () => {
        Given(() => {
          pizzaName = 'fake name';
          pizzaSize = -999;
          toppings = ['some', 'fake', 'toppings'];
        });
        Then(() => {
          expect(actualResult).toBeFalsy();
        });
      });
    });
  });
});
