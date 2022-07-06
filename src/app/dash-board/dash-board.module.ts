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
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {DividerModule} from 'primeng/divider';


@NgModule({
  declarations: [
   DashboardComponent,
   ProfileComponent,
   UsersComponent,
   SidebarComponent
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
    TableModule,
    ToastrModule,
    ChartModule,
    CheckboxModule,
    CalendarModule,
    DividerModule
    

  ],
  providers:[MessageService]

})
export class DashBoardModule { }
