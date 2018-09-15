/*Routing*/
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './shop/books/books.component';
import { ComputersComponent } from './shop/computers/computers.component';
import { DressComponent } from './shop/dress/dress.component';
import { FoodsComponent } from './shop/foods/foods.component';
import { AllproductsComponent } from './shop/allproducts/allproducts.component';
import { ProductaddComponent } from './shop/productadd/productadd.component';

export const approutes:Routes =[

  { path:'' , redirectTo:'/home', pathMatch :'full'},
  { path:'home' , component:HomeComponent},
  { path:'Shop' ,component:ShopComponent, children:[
    { path:'allproducts',component:AllproductsComponent,children:[{path:'productadd',component:ProductaddComponent}]},
    { path:'books',component:BooksComponent },
    { path:'computers',component:ComputersComponent},
    { path:'dress',component:DressComponent},
    { path:'foods',component:FoodsComponent},
  ]},
  { path:'Login',component:LoginComponent,canActivate:[ShopComponent]},
//{ path:'checkout',component:CheckoutComponent },
 // { path:'shopcatgory/category',loadChildren:'./app/shopcatgory/catgory/CategoryComponent'}
]

export const routing = RouterModule.forRoot(approutes);