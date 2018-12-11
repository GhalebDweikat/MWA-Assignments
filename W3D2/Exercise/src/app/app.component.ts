import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-smart [Array]="['One', 'Two', 'Three', 'Four']" ></app-smart>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise';
}
