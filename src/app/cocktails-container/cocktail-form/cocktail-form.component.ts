import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cocktail-form',
  standalone: false,

  templateUrl: './cocktail-form.component.html',
  styleUrl: './cocktail-form.component.scss',
})
export class CocktailFormComponent implements OnInit {
  public cocktailForm!: FormGroup;
  public currentNumberIngrdient: number = 0;

  constructor() {}

  get ingredients() {
    return this.cocktailForm.get('ingredients') as FormArray;
  }

  ngOnInit(): void {
    this.cocktailForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      img: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      ingredients: new FormArray([], Validators.required),
    });
    console.log(this.cocktailForm);
  }

  public addIngredient() {
    this.ingredients.push(
      new FormGroup({
        name: new FormControl('', Validators.required),
        quantity: new FormControl(0, Validators.required),
      })
    );
  }

  public submit() {}
}
