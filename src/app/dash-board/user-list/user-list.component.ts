import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  users: any;
  constructor(private userlist: AppService) {
    this.userlist.getdata().subscribe((data) => {
      this.users = data
      console.log(data);

    })
  }

}
