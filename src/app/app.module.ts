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
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {SearchComponent} from "./pages/search/search.component";
import { PracticeExamComponent } from './practice-exam/practice-exam.component';

// 1. khai bao danh sach routing
const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'category', component: CategoryComponent},
  {path: 'product/:id', component: ProductsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  { path: 'search', component: SearchComponent},
  {path: 'exam', component: PracticeExamComponent}
]
@NgModule({
  declarations: [
    AppComponent, CategoryComponent, HomeComponent, ProductsComponent, ItemComponent,
    ClassesComponent, StudentComponent, LoginComponent, SignupComponent, SearchComponent, PracticeExamComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
