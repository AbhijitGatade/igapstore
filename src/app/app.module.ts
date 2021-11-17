import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { LogoutComponent } from './logout/logout.component';
import { ApiService } from './api.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminproductcategiesComponent } from './adminproductcategies/adminproductcategies.component';
import { AdminproductcategyComponent } from './adminproductcategy/adminproductcategy.component';
import { AdminslidersComponent } from './adminsliders/adminsliders.component';
import { AdminsliderComponent } from './adminslider/adminslider.component';
import { AdmintestimonialsComponent } from './admintestimonials/admintestimonials.component';
import { AdmintestimonialComponent } from './admintestimonial/admintestimonial.component';
import { AdminproductsComponent } from './adminproducts/adminproducts.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AdminloginComponent,
    AdminhomeComponent,
    LogoutComponent,
    AdminproductcategiesComponent,
    AdminproductcategyComponent,
    AdminslidersComponent,
    AdminsliderComponent,
    AdmintestimonialsComponent,
    AdmintestimonialComponent,
    AdminproductsComponent,
    AdminproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
