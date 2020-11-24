import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FooterComponent } from './footer/footer.component';
import { CyberpowerpcRainbowComponent } from './cyberpowerpc-rainbow/cyberpowerpc-rainbow.component';
import { IbuypowerRedblackComponent } from './ibuypower-redblack/ibuypower-redblack.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AccountPageComponent } from './accountpage/accountpage.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import {AccountService} from './register/account.service';
import { TestComponent } from './test/test.component';
import { OrdersComponent } from './orders/orders.component';
import { AccountpageproductComponent } from './accountpageproduct/accountpageproduct.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HeaderService } from './header/header.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CyberpowerpcRainbowComponent,
    IbuypowerRedblackComponent,
    SignInComponent,
    HomeComponent,
    RegisterComponent,
    AccountPageComponent,
    ShoppingcartComponent,
    TestComponent,
    OrdersComponent,
    AccountpageproductComponent,
    NotFoundComponentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  
  ],
  providers: [AccountService,HeaderService],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
