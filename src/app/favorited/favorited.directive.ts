import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFavorited]',
})
export class FavoritedDirective implements OnChanges {
  @Input('appFavorited') favorited: boolean;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.favorited) {
      this.el.nativeElement.style.border = this.favorited ? '2px solid green' : '';
    }
  }
}
