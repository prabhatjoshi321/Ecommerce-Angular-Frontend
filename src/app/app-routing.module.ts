import { BoardAdminComponent } from './board-admin/board-admin.component';
import { PostproductComponent } from './postproduct/postproduct.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { ProfileComponent } from './profile/profile.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: UserloginComponent},
  // {path: 'productlisting', component: ProductListingComponent},
  // {path: 'productpage', component: ProductpageComponent},
  {path: 'register', component: UserregisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'logout', component: UserlogoutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'insertproduct', component: PostproductComponent},
  {path: 'productlisting', component: BoardAdminComponent},
  {path: '**', component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
