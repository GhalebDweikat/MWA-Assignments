import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data;
  constructor(private http: HttpClient) { }
  getUsers(){
    if(!this.data) //gets only once
      this.data = this.http.get('https://randomuser.me/api/?results=10');
    return this.data;//['User1', 'User2'];
  }
}
