import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirective]',
})
export class HighlightDirective {
  constructor(private element: ElementRef) {}

  @Input('appDirective') color = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.color || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
