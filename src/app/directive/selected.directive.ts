import {
  Directive,
  HostBinding,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appSelected]',
  standalone: false,
})
export class SelectedDirective implements OnChanges {
  @Input('appSelected') public cocktailSelected!: boolean;
  @HostBinding('style.backgroundColor') private backgroundColor!: string;
  @HostBinding('style.color') color!: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.cocktailSelected) {
      this.backgroundColor = 'var(--primary)';
      this.color = 'white';
    } else {
      this.backgroundColor = '';
      this.color = 'var(--text-regular)';
    }
  }
  constructor() {}
}
