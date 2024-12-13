import { Component, Input } from '@angular/core';
import { Cocktails } from '../../shared/interface/cocktail.interface';
import { PanierService } from '../../shared/services/panier.service';

@Component({
  selector: 'app-cocktail-details',
  standalone: false,

  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss',
})
export class CocktailDetailsComponent {
  @Input('cocktail') public cocktail!: Cocktails;

  constructor(private panierService: PanierService) {}

  public addIngredient() {
    this.panierService.addIngredient([...this.cocktail.ingredients]);
  }
}
