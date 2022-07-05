import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  basicData: any;
  basicOptions:any
  
  constructor(private messageService: MessageService,
    //  private configService: AppConfigService
     ) {}

  ngOnInit() {
      this.basicData = {
          labels: ['.', '.', '.', '.', '.', '.', '.'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: '#42A5F5',
                  tension: .4
              },
            
          ]
      }
    }
  }
