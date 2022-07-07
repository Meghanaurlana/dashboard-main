import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dash-board/dashboard/dashboard.component';
import { AuthGuard } from './gurds/auth.guard';
import { LoginComponent } from './registration/login/login.component';
import { ProfileComponent } from './dash-board/profile/profile.component';
import { RegisterComponent } from './registration/register/register.component';
import { SidebarComponent } from './dash-board/sidebar/sidebar.component';
import { UsersComponent } from './dash-board/users/users.component';


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
      { path: "dashboard", component: DashboardComponent },
      { path: "profile", component: ProfileComponent },
      { path: "users", component: UsersComponent },
      {path:"sidebar", component:SidebarComponent}

    ]
  },

  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
