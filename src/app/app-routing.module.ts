import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminproductcategiesComponent } from './adminproductcategies/adminproductcategies.component';
import { AdminproductcategyComponent } from './adminproductcategy/adminproductcategy.component';
import { AdminsliderComponent } from './adminslider/adminslider.component';
import { AdminslidersComponent } from './adminsliders/adminsliders.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component:HomeComponent},
  {path:"admin-login", component:AdminloginComponent},

  {path:"admin-home", component:AdminhomeComponent},

  {path:"admin-product-categories", component:AdminproductcategiesComponent},
  {path:"admin-product-category/:id", component:AdminproductcategyComponent},
  {path:"admin-sliders", component:AdminslidersComponent},
  {path:"admin-slider/:id", component:AdminsliderComponent},

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
  LogoutComponent];
