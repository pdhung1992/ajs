import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./ajc-app/student.component";
import {ClassesComponent} from "./classes/classes.component";
import {CategoryComponent} from "./pages/category/category.component";
import {HomeComponent} from "./pages/home/home.component";
import {ProductsComponent} from "./pages/products/products.component";
import { ItemComponent } from './pages/item/item.component';
import {RouterModule, Routes} from "@angular/router";
import * as path from "path";
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

// 1. khai bao danh sach routing
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'product', component: ProductsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent}
]
@NgModule({
  declarations: [
    AppComponent, CategoryComponent, HomeComponent, ProductsComponent, ItemComponent,
    ClassesComponent, StudentComponent, LoginComponent, SignupComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
