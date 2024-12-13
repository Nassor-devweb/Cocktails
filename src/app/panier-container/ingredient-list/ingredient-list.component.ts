import { Component, Input } from '@angular/core';
import { Ingredients } from '../../shared/interface/ingredient.interface';

@Component({
  selector: 'app-ingredient-list',
  standalone: false,

  templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.scss',
})
export class IngredientListComponent {
  @Input('ingredients') public ingredients!: Ingredients[];
}
