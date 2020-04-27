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

        Then(() => {
          expect(actualResult.name).toBe(name);
          expect(actualResult.pasta).toBe(pasta);
          expect(actualResult.toppings).toBe(toppings);
        });
      });
    });
  });
});
