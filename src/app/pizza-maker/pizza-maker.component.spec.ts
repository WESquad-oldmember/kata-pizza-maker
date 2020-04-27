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
      describe('GIVEN a set of toppings THEN the right pizza is create', () => {
        const name = 'Mexican Pizza';
        const pasta = 'small';
        const toppings = ['tomato sauce', 'meat', 'pepperoni', 'pineapple', 'pepper', 'cheddar', 'hot sauce'];

        Given(() => {
          actualResult = componentUnderTest.makePizza(name, pasta, toppings);
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
