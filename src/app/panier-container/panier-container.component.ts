import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/interface/ingredient.interface';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-panier-container',
  standalone: false,

  templateUrl: './panier-container.component.html',
  styleUrl: './panier-container.component.scss',
})
export class PanierContainerComponent implements OnInit {
  public ingredients!: Ingredients[];

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
    this.panierService.$ingredient.subscribe((value: Ingredients[] | null) => {
      if (value !== null) {
        this.ingredients = value;
      } else {
        this.ingredients = [];
      }
    });
  }
}
