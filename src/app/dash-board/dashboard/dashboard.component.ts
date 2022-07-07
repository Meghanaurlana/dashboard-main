import { Component, OnInit } from '@angular/core';
import { Ticks } from 'chart.js';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  basicData: any;
  basicOptions: any;
  products: Product[] = [];

  constructor(
    private messageService: MessageService //  private configService: AppConfigService
  ) {}

  ngOnInit() {
    this.basicData = {
      labels: ['.', '.', '.', '.', '.', '.', '.'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65, 59, 80, 91, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4,
        },
      ],
    };

    this.products = tableData;
  }
}

export interface Product {
  Name?: string;
  EmailAddress?: string;
  PhoneNumber?: number;
  DateCreated?: string;
  PincodeAddress?: number;
}

const tableData = [
  {
    Name: 'Robert Hilington',
    EmailAddress: 'robert12@gmail.com',
    PhoneNumber: 123 - 456 - 7890,
    DateCreated: '21 Dec 2020',
  },
  {
    Name: 'Thomas H',
    EmailAddress: 'robert12@gmail.com',
    PhoneNumber: 123 - 456 - 7890,
    DateCreated: '21 Dec 2020',
  },
  {
    Name: 'Robert Hilington',
    EmailAddress: 'thomas.h@yahoo.com',
    PhoneNumber: 123 - 456 - 7890,
    DateCreated: '21 Dec 2020',
  },
  {
    Name: 'Robert C ',
    EmailAddress: 'crobert23@gmail.com',
    PhoneNumber: 123 - 456 - 7890,
    DateCreated: '21 Dec 2020',
  },
];
