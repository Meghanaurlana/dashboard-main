import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
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
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [
   DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    InputTextModule,
    RadioButtonModule,
    ButtonModule,
    FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    PasswordModule,
    SidebarModule,
    CardModule,
    ToastModule,
    ToastrModule,
    ChartModule
    

  ],
  providers:[MessageService]

})
export class DashBoardModule { }
