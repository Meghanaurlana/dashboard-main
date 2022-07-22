import { Component, OnInit, } from '@angular/core';
import { DashBoardService } from '../services/dash-board.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private users: DashBoardService) { }

  user: any;
  ngOnInit(): void {
    this.users.getdata().subscribe((data) => {
      this.user = data
      // console.log(data);
    })
  }

  remove(x: any) {
    this.user.splice(x, 1);
  }

}
