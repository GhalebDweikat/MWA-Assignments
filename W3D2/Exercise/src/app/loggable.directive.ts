import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appLoggable]'
})
export class LoggableDirective {

  constructor() { }
  @HostListener('dblclick', ['$event.target.innerText']) doubleClicked(e){
    console.log(`Element ${e} double clicked!`);
  }
}
