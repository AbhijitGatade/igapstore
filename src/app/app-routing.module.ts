import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminproductComponent } from './adminproduct/adminproduct.component';
import { AdminproductcategiesComponent } from './adminproductcategies/adminproductcategies.component';
import { AdminproductcategyComponent } from './adminproductcategy/adminproductcategy.component';
import { AdminproductsComponent } from './adminproducts/adminproducts.component';
import { AdminsliderComponent } from './adminslider/adminslider.component';
import { AdminslidersComponent } from './adminsliders/adminsliders.component';
import { AdmintestimonialComponent } from './admintestimonial/admintestimonial.component';
import { AdmintestimonialsComponent } from './admintestimonials/admintestimonials.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"admin-login", component:AdminloginComponent},

  {path:"admin-home", component:AdminhomeComponent},

  {path:"admin-product-categories", component:AdminproductcategiesComponent},
  {path:"admin-product-category/:id", component:AdminproductcategyComponent},

  {path:"admin-sliders", component:AdminslidersComponent},
  {path:"admin-slider/:id", component:AdminsliderComponent},

  {path:"admin-testimonials", component:AdmintestimonialsComponent},
  {path:"admin-testimonial/:id", component:AdmintestimonialComponent},

  {path:"admin-products", component:AdminproductsComponent},
  {path:"admin-product/:id", component:AdminproductComponent},

  {path:"products/:id", component:ProductsComponent},

  {path:"logout", component:LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponent = [HomeComponent, AdminloginComponent,
  AdminhomeComponent,
  AdminproductcategiesComponent, AdminproductcategyComponent,
  AdminslidersComponent, AdminsliderComponent,
  AdmintestimonialComponent, AdmintestimonialComponent,
  AdminproductsComponent, AdminproductComponent,

  ProductsComponent,

  LogoutComponent];
