import { Component, OnInit, NgModule, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
})
export class AllproductsComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
    
  }
  @Input()
  public acount:number;
  count : number = 0;
  searchs;
  productCate = ["Books" ,"Dress" ,"Foods","Computers"];
  products:any[]= [
  {
    "productCategory":"Books",
    "productId":'B001',
    "productName":"Books Part-1",
    "productDesc":"This is Sample Book",
    "productStock":10,
    "productPrice":250,
    "productImageUrl":"../assets/images/bookss.jpg"
},
{
  "productCategory":"Books",
    "productId":'B002',
    "productName":"Books Part-2",
    "productDesc":"This is Sample Book",
    "productStock":10,
    "productPrice":150,
    "productImageUrl":"../assets/images/bookss.jpg"

},
{
    "productCategory":"Food",
    "productId":'F001',
    "productName":"Choco Desert",
    "productDesc":"This is Sample Food",
    "productStock":10,
    "productPrice":100,
    "productImageUrl":"../assets/images/choco.jpg"
},
{
    "productCategory":"Computers",
    "productId":'C001',
    "productName":"HP Core 5",
    "productDesc":"This is Sample Computers",
    "productStock":10,
    "productPrice":2000,
    "productImageUrl":"../assets/images/hppp.jpg"
},
{
  "productCategory":"Food",
  "productId":'F002',
  "productName":"Choco Desert",
  "productDesc":"This is Sample Food",
  "productStock":10,
  "productPrice":200,
  "productImageUrl":"../assets/images/choco.jpg"
},

]
showproducts()
{


}
addcart():number
{
  let countinc = this.count++;
  //this.products.productPrice= * countinc; 
  return countinc;
}
removecart():number
{
  return this.count--;
}
addproduct()
{
  this.router.navigate(['productadd']);

}
}
