import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './userdetails.component';
import { RouterModule, Routes } from "@angular/router";
import {UserGuardGuard} from "./user-guard.guard";


const routes: Routes = [{path: ':id', component: UserDetailsComponent, canActivate: [UserGuardGuard]},
                        {path: '', component: UsersComponent}];

@NgModule({
  declarations: [UsersComponent, UserDetailsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class UsersModule { }
