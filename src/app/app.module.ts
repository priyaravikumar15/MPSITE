import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/*Added Component*/
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

/*Search Filter */
import { Ng2SearchPipeModule } from 'ng2-search-filter';

/*Routing*/
import { Routes, RouterModule } from '@angular/router';


export const routes:Routes =[

  { path:'' , redirectTo:'/home', pathMatch :'full'},
  { path:'home' , component:HomeComponent},
  { path:'Shop' ,component:ShopComponent, children:[
    { path:'allproducts',component:AllproductsComponent},
    { path:'books',component:BooksComponent },
    { path:'computers',component:ComputersComponent},
    { path:'dress',component:DressComponent},
    { path:'foods',component:FoodsComponent},
  ]},
  { path:'Login',component:LoginComponent},
 // { path:'shopcatgory/category',loadChildren:'./app/shopcatgory/catgory/CategoryComponent'}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ShopComponent,
    LoginComponent,
    BooksComponent,
    ComputersComponent,
    DressComponent,
    FoodsComponent,
    AllproductsComponent,
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule,Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
