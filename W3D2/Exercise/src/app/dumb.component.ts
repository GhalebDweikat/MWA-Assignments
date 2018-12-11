import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <p appLoggable [ngStyle]="{border: '1px solid black'}">
      {{value}}
    </p>
  `,
  styles: []
})
export class DumbComponent implements OnInit {
  @Input('value') value;
  constructor() { }

  ngOnInit() {
  }

}
