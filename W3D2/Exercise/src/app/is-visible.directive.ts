import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective{
  @Input('appIsVisible') val;
  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {

  }

  ngOnInit(){
    if(!this.val)
      this.renderer2.setStyle(this.elementRef.nativeElement, 'display', 'none');
  }

}
