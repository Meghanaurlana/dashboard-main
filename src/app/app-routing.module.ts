import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dash-board/dashboard/dashboard.component';
import { AuthGuard } from './gurds/auth.guard';
import { LoginComponent } from './registration/login/login.component';
import { ProfileComponent } from './profile-users/profile/profile.component';
import { RegisterComponent } from './registration/register/register.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { UsersComponent } from './profile-users/users/users.component';


const routes: Routes = [
  // { path: "", redirectTo: "dashboard", pathMatch: "full" },
 
  // { path: "profile", component: ProfileComponent },

  // { path: "users", component: UsersComponent },
  // { path: "dashboard", component: DashboardComponent },
  // { path: "sidenav", component: SidenavComponent },

  {
    path: "registration", children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent }
    ]
  },

  {
    path: "dash-board", children: [
      { path: "dashboard", component: DashboardComponent }

    ]
  },

  {
    path: "profile-users", children: [
      { path: "profile", component: ProfileComponent },
      { path: "users", component: UsersComponent }
    ]
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
