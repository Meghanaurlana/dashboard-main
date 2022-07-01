import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProfileComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProfileUsersModule { }
