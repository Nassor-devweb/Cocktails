import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appModal]',
  standalone: false,
})
export class ModalDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('window:click', ['$event']) public closeModal(event: Event) {
    console.log('this.el ', this.elementRef);
    console.log('event ', event);
    const eventTarget = event.target as HTMLElement;
    const elRef = this.elementRef.nativeElement as HTMLDivElement;
    if (
      !elRef.contains(eventTarget) &&
      elRef.classList.contains('modal-content')
    ) {
      const el = document.querySelector('.modal');
      el?.classList.remove('modal');
    }
  }
}
