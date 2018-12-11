import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-counter counterVal = "100" (counterChange)="cntCng($event)"></app-counter> ComponentCounterValue={{ComponentCounterValue}}`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise';
  ComponentCounterValue = 0;
  cntCng(e) {
    this.ComponentCounterValue = e;
    console.log(e);
  }
}
