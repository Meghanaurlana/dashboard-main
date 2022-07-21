import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  { path: "", redirectTo: "dashboard", pathMatch: "full" },


  {
    path: 'registration',
    loadChildren: () => import('./registration/registration-routing.module').then(m => m.RegistrationRoutingModule)
  },
  {
    path: 'dash-board',
    loadChildren: () => import('./dash-board/dash-board-routing.module').then(m => m.DashBoardRoutingModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
