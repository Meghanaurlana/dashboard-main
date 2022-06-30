import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import {InputTextModule} from 'primeng/inputtext';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {SidebarModule} from 'primeng/sidebar';
import { ToastrModule } from 'ngx-toastr';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    SidenavComponent,
    ProfileComponent,
    UsersComponent
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
  
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
