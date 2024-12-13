import { Component, OnDestroy, OnInit } from '@angular/core';
import { cocktails } from '../data/cocktails.data';
import { Cocktails } from '../shared/interface/cocktail.interface';
import { CocktailService } from '../shared/services/cocktail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cocktails-container',
  standalone: false,

  templateUrl: './cocktails-container.component.html',
  styleUrl: './cocktails-container.component.scss',
})
export class CocktailsContainerComponent implements OnInit, OnDestroy {
  public cocktails: Cocktails[] = [];
  public cocktailSelected!: Cocktails;
  public subscriptions: Subscription[] = [];

  constructor(private cocktailsService: CocktailService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.cocktailsService.$cocktails.subscribe((cocktails: Cocktails[]) => {
        this.cocktails = cocktails;
      })
    );

    this.subscriptions.push(
      this.cocktailsService.$cocktailSelected.subscribe(
        (cocktailSelected: Cocktails) => {
          this.cocktailSelected = cocktailSelected;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

  public getCocktailSelected(event: any) {
    this.cocktailSelected = event;
  }
}
