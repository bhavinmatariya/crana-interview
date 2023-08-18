import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[visible]'
})
export class VisibleDirective implements AfterViewInit {
  @Input() visible!: boolean;
  constructor(private eleRef: ElementRef,) { }

  ngAfterViewInit() {
    if (this.visible)
      this.eleRef.nativeElement.remove();
  }

}
