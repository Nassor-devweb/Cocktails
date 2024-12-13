import { Component, OnInit } from '@angular/core';
import { Cocktails } from '../../shared/interface/cocktail.interface';
import { CocktailService } from '../../shared/services/cocktail.service';

@Component({
  selector: 'app-page-list',
  standalone: false,

  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.scss',
})
export class PageListComponent implements OnInit {
  public cocktails!: Cocktails[];

  constructor(private cocktailsService: CocktailService) {}

  ngOnInit(): void {
    this.cocktails = this.cocktailsService.$cocktails.value;
  }
}
