import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RegistrationRoutingModule } from './registration/registration-routing.module';
// import { DashBoardRoutingModule } from './dash-board/dash-board-routing.module';


const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
 
  // { path: "profile", component: ProfileComponent },

  // { path: "users", component: UsersComponent },
  // { path: "dashboard", component: DashboardComponent },
  // { path: "sidenav", component: SidenavComponent },

  

  
  {  
    path: 'registration',  
    loadChildren: () => import('./registration/registration-routing.module').then(m => m.RegistrationRoutingModule)  
  }  ,
  {  
    path: 'dash-board',  
    loadChildren: () => import('./dash-board/dash-board-routing.module').then(m => m.DashBoardRoutingModule)  
  }  ,
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
