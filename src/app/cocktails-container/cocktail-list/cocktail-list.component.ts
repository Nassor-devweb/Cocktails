import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Cocktails } from '../../shared/interface/cocktail.interface';
import { cocktails } from '../../data/cocktails.data';

@Component({
  selector: 'app-cocktail-list',
  standalone: false,
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.scss',
})
export class CocktailListComponent {
  public currentCocktailSelected!: HTMLLIElement;

  @ViewChildren('childrenNode') public childrenNode!: QueryList<
    ElementRef<HTMLLIElement>
  >;

  @Input('cocktailSelected') public cocktailSelected!: Cocktails;

  @Input('cocktails') public cocktails!: Cocktails[];

  @Output('cocktailSelectedEmit')
  public cocktailSelectedEmit: EventEmitter<number> = new EventEmitter();

  public selectCocktailHandler(event: Event, index: number) {
    this.cocktailSelectedEmit.emit(index);
  }
}
