import { ReviewsComponent } from './reviews/reviews.component';
import { AdmingetreviewsComponent } from './admingetreviews/admingetreviews.component';
import { AdmingetrequirementsComponent } from './admingetrequirements/admingetrequirements.component';
import { AdmingetproductComponent } from './admingetproduct/admingetproduct.component';
import { AdmingetusersComponent } from './admingetusers/admingetusers.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { InsertselectorComponent } from './insertselector/insertselector.component';
import { PostproductrentComponent } from './postproductrent/postproductrent.component';
import { MypropertiesComponent } from './myproperties/myproperties.component';
import { SavedsearchesComponent } from './savedsearches/savedsearches.component';
import { BoardAgentComponent } from './board-agent/board-agent.component';
import { SearchComponent } from './search/search.component';
import { CompareComponent } from './compare/compare.component';
import { RequirementComponent } from './requirement/requirement.component';
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
  {path: 'productlisting', component: ProductListingComponent},
  {path: 'productpage', component: ProductpageComponent},
  {path: 'register', component: UserregisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'logout', component: UserlogoutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'insertproductsale', component: PostproductComponent},
  {path: 'insertproductrent', component: PostproductrentComponent},
  {path: 'search', component: SearchComponent},
  {path: 'agentregister', component: BoardAgentComponent},
  {path: 'insertproduct', component: InsertselectorComponent},
  {path: 'requirement', component: RequirementComponent},
  {path: 'myproperties', component: MypropertiesComponent},
  {path: 'compare', component: CompareComponent},
  {path: 'login', component: UserloginComponent},
  {path: 'savedsearches', component: SavedsearchesComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'adminpanel', component: AdminpanelComponent},
  {path: 'adminusers', component: AdmingetusersComponent},
  {path: 'adminproducts', component: AdmingetproductComponent},
  {path: 'adminrequirements', component: AdmingetrequirementsComponent},
  {path: 'adminpreviews', component: AdmingetreviewsComponent},
  {path: '**', component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
