import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>
      <button (click)="inc()">+</button>
      {{counterValue}}
      <button (click)="dec()">-</button>
    </p>
  `,
  styles: [],
  inputs: ['counterValue: counterVal'],
  outputs: ['counterChange']
})
export class CounterComponent implements OnInit {
  counterValue: number = 0;
  counterChange: EventEmitter<number>;
  constructor() {
    this.counterChange = new EventEmitter();
  }

  inc(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }

  dec(){
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }

  ngOnInit() {
  }

}
