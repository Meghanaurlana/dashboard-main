import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  products: Product[] = [];

list=["Name", "EmailAddress","PhoneNumber","DateCreated","PincodeAddress"];
  constructor() { }

  ngOnInit(): void {
    this.products = tableData;



    }

    remove(x:number){
    
      this.products.splice(x, 1);
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
    "PincodeAddress": "100189"
  },
  {
    "Name": "Thomas H",
    "EmailAddress": "thomas.h3@yahoo.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "010189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert132@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "  200189"
  },
  {
    "Name": "Robert C",
    "EmailAddress": "crobert213@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "003189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert125@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "004189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert127@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "006189"
  },
  {
    "Name": "Robert pattison",
    "EmailAddress": "robert012@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "009189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert120@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "008189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert121@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000989"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert112@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000689"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12p@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "00089"
  },
  {
    "Name": "Thomas H",
    "EmailAddress": "thomas.h10@yahoo.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "0009989"
  },
  {
    "Name": "Robert pattison",
    "EmailAddress": "robert12a@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "  0011189"
  },
  {
    "Name": "Robert C",
    "EmailAddress": "crobert23e@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "0001878"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert124@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12g@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert pattison",
    "EmailAddress": "robert12k@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12l@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12q@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert pattison",
    "EmailAddress": "robert12r@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12e@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Thomas H",
    "EmailAddress": "thomas.hg@yahoo.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12d@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "  000189"
  },
  {
    "Name": "Robert C",
    "EmailAddress": "crobert23w@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert pattison",
    "EmailAddress": "robert12o@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12i@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12u@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12t@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12r@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12e@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12n@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Thomas H",
    "EmailAddress": "thomas.hs@yahoo.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert pattison",
    "EmailAddress": "robert12a@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "  000189"
  },
  {
    "Name": "Robert C",
    "EmailAddress": "crobert23z@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12x@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert1211@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12b@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12c@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert12v@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert1212@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert1213@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Thomas H",
    "EmailAddress": "thomas.h14@yahoo.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert1215@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "  000189"
  },
  {
    "Name": "Robert C",
    "EmailAddress": "crobert2316@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "James Butt",
    "EmailAddress": "robert1217@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert1218@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert1220@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert1219@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert1221@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert1222@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Art Veneren",
    "EmailAddress": "robert1223@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Thomas H",
    "EmailAddress": "thomas.h34@yahoo.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert1225@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "  000189"
  },
  {
    "Name": "Robert C",
    "EmailAddress": "crobert2335@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert1254@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert1245@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert1256@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert1267@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Chemel, James L Cpa",
    "EmailAddress": "robert1276@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  },
  {
    "Name": "Robert Hilington",
    "EmailAddress": "robert1278@gmail.com",
    "PhoneNumber": "123-456-7890",
    "DateCreated": "21 Dec 2020",
    "PincodeAddress": "000189"
  }

]

