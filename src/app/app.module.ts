import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { DashBoardModule } from './dash-board/dash-board.module';
import{HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,




  ],
  imports: [
    CommonModule,
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
     DashBoardModule,
     HttpClientModule

  ],


  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
