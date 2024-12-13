import { Component, Input } from '@angular/core';
import { Cocktails } from '../../shared/interface/cocktail.interface';

@Component({
  selector: 'app-cocktail-details',
  standalone: false,

  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss',
})
export class CocktailDetailsComponent {
  @Input('cocktail') public cocktail!: Cocktails;
}
