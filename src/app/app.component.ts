import { Component } from '@angular/core';
import { Cocktails } from './shared/interface/cocktail.interface';
import { cocktails } from './data/cocktails.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {}
}
