import { PizzaSize } from './pizza-size.enum';
import { PizzaType } from './pizza-type.enum';
export class Pizza {
    name: PizzaType;
    size: PizzaSize;
    toppings: string[];
}
