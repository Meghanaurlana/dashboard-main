import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { SidenavComponent } from './sidenav/sidenav.component';


import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { SidebarModule } from 'primeng/sidebar';
import { ToastrModule } from 'ngx-toastr';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { RegistrationModule } from './registration/registration.module';
import { ProfileUsersModule } from './profile-users/profile-users.module';
import { DashBoardModule } from './dash-board/dash-board.module';




@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    SidebarModule,
    ToastrModule.forRoot(),
    ToastModule,
    RegistrationModule,
    ProfileUsersModule,
    DashBoardModule

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
