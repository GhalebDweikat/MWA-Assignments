import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <div *ngFor="let elem of Array">
      <app-dumb value="{{elem}}"></app-dumb>
    </div>
    <div [appIsVisible]="false"> INVISIBLE! </div>
  `,
  styles: []
})
export class SmartComponent implements OnInit {
  @Input('Array') Array;
  constructor() { }

  ngOnInit() {
  }

}
