import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
    this.products = tableData;
  }
}

export interface Product {

  Name?: string;
  EmailAddress?: string;
  PhoneNumber?: string;
  DateCreated?: string;
  PincodeAddress?: string;
}

const tableData = [
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Thomas H",
    "EmailAddress": "thomas.h@yahoo.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "  000189"
  },
  {
    "Name": "Robert C",
    "EmailAddress": "crobert23@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  }

]

