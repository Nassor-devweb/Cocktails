import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
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
export class CocktailListComponent implements AfterViewInit {
  public currentCocktailSelected!: HTMLLIElement;
  @ViewChildren('childrenNode') public childrenNode!: QueryList<
    ElementRef<HTMLLIElement>
  >;

  public cocktails: Cocktails[] = cocktails;
  @Output('cocktailSelectedEmit')
  public cocktailSelectedEmit: EventEmitter<Cocktails> = new EventEmitter();

  public selectCocktailHandler(event: Event, cocktail: Cocktails) {
    this.cocktailSelectedEmit.emit(cocktail);

    this.currentCocktailSelected.classList.remove('cocktailSelected');

    this.currentCocktailSelected = event.target as HTMLLIElement;
    this.currentCocktailSelected.classList.add('cocktailSelected');
  }

  ngAfterViewInit(): void {
    console.log();
    this.currentCocktailSelected = (
      this.childrenNode.first as ElementRef<HTMLLIElement>
    ).nativeElement;
  }
}
