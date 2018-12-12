import { Component, OnInit } from '@angular/core';
import {DataService} from "./data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-userdetails',
  template: `
  <h2>User Details</h2>
  {{user}}
  `,
  styleUrls: ['./userdetails.component.css']
})
export class UserDetailsComponent implements OnInit {
  id;
  user;
  constructor(private dataSrv: DataService, private route: ActivatedRoute) {
    route.params.subscribe(params => this.id = params['id'])
  }

  ngOnInit() {
    this.dataSrv.getUsers().subscribe((res) => {
      this.user = JSON.stringify(res.results[this.id]);
    });
  }

}
