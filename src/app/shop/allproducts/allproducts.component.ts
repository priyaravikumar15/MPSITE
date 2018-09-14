import { Component, OnInit, NgModule } from '@angular/core';


@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css'],
})
export class AllproductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }
  searchs;
productCate = ["Books" ,"Dress" ,"Foods","Computers"];
products:any[]= [
  {
    "productCategory":"Books",
    "productId":1,
    "productName":"ABC",
    "productDesc":"This is Sample Book",
    "productStock":10,
    "productPrice":200,
    "productImageUrl":"../assets/images/bookss.jpg"
},
{
    "productCategory":"Food",
    "productId":2,
    "productName":"EFG",
    "productDesc":"This is Sample Food",
    "productStock":10,
    "productPrice":200,
    "productImageUrl":"../assets/images/bookss.jpg"
},
{
  "productCategory":"Books",
    "productId":3,
    "productName":"HIJ",
    "productDesc":"This is Sample Book",
    "productStock":10,
    "productPrice":200,
    "productImageUrl":"../assets/images/bookss.jpg"

},
{
    "productCategory":"Computers",
    "productId":4,
    "productName":"KLM",
    "productDesc":"This is Sample Computers",
    "productStock":10,
    "productPrice":200,
    "productImageUrl":"../assets/images/bookss.jpg"
}

];
showproducts()
{

}
addcart()
{
  let a = 0; 
}
}
