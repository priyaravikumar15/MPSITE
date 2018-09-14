import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
}
export interface Iproduct{
  productCategory:string;
  productId:number;
  productName:string;
  productDesc:string;
  productStock:number;
  productPrice:number;
  productImageUrl:string;
}
