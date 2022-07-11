import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  // { path: "", redirectTo: "dashboard", pathMatch: "full" },
 
  // { path: "profile", component: ProfileComponent },

  // { path: "users", component: UsersComponent },
  // { path: "dashboard", component: DashboardComponent },
  // { path: "sidenav", component: SidenavComponent },

  

  
  {  
    path: 'registration',  
    loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)  
  }  ,
  {  
    path: 'dash-board',  
    loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule)  
  }  ,
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
