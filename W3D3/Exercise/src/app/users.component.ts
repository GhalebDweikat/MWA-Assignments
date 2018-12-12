import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-users',
  template: `
  <h2>Users Component</h2>
  <ul>
    <li *ngFor="let u of users; let i = index"><a [routerLink]="[i]">{{u.name.title}} {{u.name.first}} {{u.name.last}}</a></li>
  </ul>
  `,
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users;
  constructor(private dataSrv: DataService) { }

  ngOnInit() {
    this.dataSrv.getUsers().subscribe((res) => {
      this.users = res.results;
    });
  }

}
