import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef) {
    console.dir(el.nativeElement.style.backgroundColor = "red")
  }

}
