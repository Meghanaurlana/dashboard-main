import { Component, OnInit } from '@angular/core';
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
  seeMore: boolean = true
  visible: boolean = false
  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.basicData = {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
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
    this.products = tableData.slice(0, 3);
  }

  oncardclick(i: number) {
    this.basicData = {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [
        {
          label: 'First Dataset',
          data: [65 * i, 59 + i, 80 / i, 91 - i, 56 + i, 55 * i, 40 - i],
          fill: false,
          borderColor: '#42A5F5',
          tension: 0.4,
        },
      ],
    };
  }
  onseemoreclick() {
    this.seeMore = !this.seeMore; //not equal to condition
    if (!this.seeMore) {
      this.products = tableData.slice(0, 12);
    } else {
      this.products = tableData.slice(0, 3);

    }
  }

}

export interface Product {
  Name?: string;
  label?: string;
}

const tableData = [
  {
    Name: 'Robert Hilington',
    label: 'RH'
  },
  {
    Name: 'Thomas H',
    label: 'TH'
  },
  {
    Name: 'Robert Hilington',
    label: 'RH'
  },
  {
    Name: 'Robert C ',
    label: 'RC'
  }, {
    Name: 'Robert Hilington',
    label: 'RH'
  },
  {
    Name: 'Thomas H',
    label: 'TH'
  },
  {
    Name: 'Robert Hilington',
    label: 'RH'
  },
  {
    Name: 'Robert C ',
    label: 'RC'
  }, {
    Name: 'Robert Hilington',
    label: 'RH'
  },
  {
    Name: 'Thomas H',
    label: 'TH'
  },
  {
    Name: 'Robert Hilington',
    label: 'RH'
  },
  {
    Name: 'Robert C ',
    label: 'RC'
  }, {
    Name: 'Robert Hilington',
    label: 'RH'
  },
  {
    Name: 'Thomas H',
    label: 'TH'
  },
  {
    Name: 'Robert Hilington',
    label: 'RH'
  },
  {
    Name: 'Robert C ',
    label: 'RC'
  }, {
    Name: 'Robert Hilington',
    label: 'RH'
  },
  {
    Name: 'Thomas H',
    label: 'TH'
  },
  
];


