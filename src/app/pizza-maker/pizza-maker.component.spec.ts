import { PizzaMakerComponent } from './pizza-maker.component';
import { TestBed } from '@angular/core/testing';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';

describe('PizzaMakerComponent', () => {
  let componentUnderTest: PizzaMakerComponent;
  let actualResult: any;

  Given(() => {
    TestBed.configureTestingModule({
      providers: [PizzaMakerComponent]
    });
    componentUnderTest = TestBed.get(PizzaMakerComponent);

    actualResult = undefined;
  });

  describe('METHOD: makePizza', () => {

    describe('GIVEN all necessary ingredients THEN a pizza is created', () => {
      describe('GIVEN a set of toppings for mexican pizza THEN a mexican pizza should be created', () => {
        const name = 'Mexican Pizza';
        const smallPasta = 'small';
        const mexicanToppings = ['tomato sauce', 'meat', 'pepperoni', 'pineapple', 'pepper', 'cheddar', 'hot sauce'];

        Given(() => {
          actualResult = componentUnderTest.makePizza(name, smallPasta, mexicanToppings);
        });

        Then(() => {
          expect(actualResult.name).toBe('Mexican Pizza');
          expect(actualResult.pasta).toBe('small');
          expect(actualResult.toppings).toEqual(['tomato sauce', 'meat', 'pepperoni', 'pineapple', 'pepper', 'cheddar', 'hot sauce']);
        });
      });

      describe('GIVEN  a set of 4 seasons ingredients THEN a 4 seasons pizza should be created', () => {
        const name = '4 Seasons Pizza';
        const smallPasta = 'small';
        const fourSeasonToppings = ['pâte', 'sauce', 'oeuf', 'épinard', 'poivron', 'fromage cheddar', 'vinaigre balsamique'];

        Given(() => {
          actualResult = componentUnderTest.makePizza(name, smallPasta, fourSeasonToppings);
        });
        Then(() => {
          // it should make a 4 seasons pizza
          expect(actualResult.name).toBe('4 Seasons Pizza');
          expect(actualResult.pasta).toBe('small');
          expect(actualResult.toppings).toEqual(['pâte', 'sauce', 'oeuf', 'épinard', 'poivron', 'fromage cheddar', 'vinaigre balsamique']);
        });
      });
    });

    describe('GIVEN toppings are missing THEN no pizza is created', () => {
      const name = 'fake name';
      const pasta = 'some size';
      const toppings = [];

      Given(() => {
        actualResult = componentUnderTest.makePizza(name, pasta, toppings);
      });

      Then(() => {
        expect(actualResult).toBeFalsy();
      });
    });
  });
});
