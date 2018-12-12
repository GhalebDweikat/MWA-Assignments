import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <h1>App Component</h1>
    <a [routerLink]="['users']">Users</a>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Exercise';
}
