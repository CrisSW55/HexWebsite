import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import {CyberpowerpcRainbowComponent} from './cyberpowerpc-rainbow/cyberpowerpc-rainbow.component';
import {IbuypowerRedblackComponent} from './ibuypower-redblack/ibuypower-redblack.component';


import { SignInComponent } from './sign-in/sign-in.component';

import { RegisterComponent } from './register/register.component';
import { AccountPageComponent } from './accountpage/accountpage.component';
import { AccountpageproductComponent } from './accountpageproduct/accountpageproduct.component';

import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import {OrdersComponent}  from './orders/orders.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
 
  { path: 'cyberpowerpc-rainbow', component: CyberpowerpcRainbowComponent },
  
  { path: 'ibuypower-redblack', component: IbuypowerRedblackComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'accountpage/:name', component: AccountPageComponent },
  { path: 'accountpage/:name/:url_product', component: AccountpageproductComponent },

  { path: 'shoppingcart/:name', component: ShoppingcartComponent},
  { path: 'orders/:name', component: OrdersComponent},
 
  {path: '404', component:NotFoundComponentComponent}


  
  

  
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
