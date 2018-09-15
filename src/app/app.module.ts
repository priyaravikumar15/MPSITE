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
import { CheckoutComponent } from './checkout/checkout.component';
/*Search Filter */
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { routing } from './app.routing';
import { ProductaddComponent } from './shop/productadd/productadd.component';

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
    CheckoutComponent,
    ProductaddComponent,
  ],
  imports: [
    BrowserModule,routing,FormsModule,Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
