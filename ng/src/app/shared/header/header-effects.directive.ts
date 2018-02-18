import {Directive, ElementRef, OnDestroy, OnInit} from '@angular/core';

@Directive({
  selector: '[piHeaderEffects]'
})
export class HeaderEffectsDirective implements OnInit, OnDestroy {
  private scrollContainer;
  private stickyCssClass = 'sticky';

  constructor(
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.scrollContainer = this.el.nativeElement.parentElement.parentElement;

    this.scrollContainer.addEventListener('scroll', this.scrollListener.bind(this));
  }

  ngOnDestroy() {
    this.scrollContainer.removeEventListener('scroll', this.scrollListener.bind(this))
  }

  private scrollListener() {
    const scrollTop = this.scrollContainer.scrollTop;

    if (scrollTop > 90) {
      this.el.nativeElement.classList.add(this.stickyCssClass);
    } else {
      this.el.nativeElement.classList.remove(this.stickyCssClass);
    }
  }
}
