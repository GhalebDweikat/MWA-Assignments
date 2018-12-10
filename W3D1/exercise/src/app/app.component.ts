import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-counter counterVal = "100" (counterChange)="cntCng($event)"></app-counter>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercise';
  
  cntCng(e) {
    console.log(e);
  }
}
