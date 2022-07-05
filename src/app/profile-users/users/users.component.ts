import { Component, OnInit } from '@angular/core';

// import { Product } from '../../domain/product';
// import { ProductService } from '../../service/productservice';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // products: Product[];

  constructor(
    // private 
    // productService: ProductService
    )
     { }

  ngOnInit() {
      // this.productService.getProductsSmall().then(data => this.products = data);
  }

}
