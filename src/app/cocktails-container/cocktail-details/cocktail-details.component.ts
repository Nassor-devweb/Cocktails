import { Component, Input, OnInit } from '@angular/core';
import { Cocktails } from '../../shared/interface/cocktail.interface';
import { PanierService } from '../../shared/services/panier.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-cocktail-details',
  standalone: false,

  templateUrl: './cocktail-details.component.html',
  styleUrl: './cocktail-details.component.scss',
})
export class CocktailDetailsComponent implements OnInit {
  @Input('cocktail') public cocktail!: Cocktails;

  constructor(
    private panierService: PanierService,
    private activatedRoute: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.cocktail = this.cocktailService.getCurrentDetailsCocktails(
        +param.get('index')!
      );
      console.log(param.get('index'));
      console.log(param.get('index'));
      //this.currentId = data.getUserResolver.id;
    });
  }

  public addIngredient() {
    this.panierService.addIngredient([...this.cocktail.ingredients]);
  }
}
