import { Injectable } from '@angular/core';
import { Ingredients } from '../interface/ingredient.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  public $ingredient: BehaviorSubject<Ingredients[] | null> =
    new BehaviorSubject<Ingredients[] | null>(null);

  constructor() {}

  public addIngredient(ingredient: Ingredients[]) {
    const currentPanierValue = this.$ingredient.value;

    if (currentPanierValue) {
      console.log([...currentPanierValue, ...ingredient]);
      const panierReduce = [...currentPanierValue, ...ingredient].reduce(
        (acc: any, currentIngredient: Ingredients) => {
          if (acc[currentIngredient['name']]) {
            acc[currentIngredient.name].quantity =
              acc[currentIngredient.name].quantity + currentIngredient.quantity;
          } else {
            acc[currentIngredient.name] = { ...currentIngredient };
          }
          return acc;
        },
        {}
      );
      const panierKey = Object.keys(panierReduce).map((el) => {
        return {
          name: el,
          quantity: panierReduce[el].quantity,
        };
      });
      this.$ingredient.next(panierKey);
    } else {
      this.$ingredient.next(ingredient);
    }

    console.log(this.$ingredient.value);
  }
}
