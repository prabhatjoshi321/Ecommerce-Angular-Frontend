import { ProductService } from './_services/product.service';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { TopbardarkComponent } from './topbardark/topbardark.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardTopbarComponent } from './dashboard-topbar/dashboard-topbar.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardAgentComponent } from './board-agent/board-agent.component';
import { BoardCompanyComponent } from './board-company/board-company.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { ProfileComponent } from './profile/profile.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ContactComponent } from './contact/contact.component';
import { PostproductComponent } from './postproduct/postproduct.component';
import { TopbardarkLoaderComponent } from './topbardark-loader/topbardark-loader.component';
import { RequirementComponent } from './requirement/requirement.component';
import { CompareComponent } from './compare/compare.component';
import { SearchComponent } from './search/search.component';
//import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    FooterComponent,
    TestimonialsComponent,
    NotfoundComponent,
    HomeComponent,
    TopbardarkComponent,
    DashboardComponent,
    DashboardTopbarComponent,
    BoardAdminComponent,
    BoardAgentComponent,
    BoardCompanyComponent,
    BoardUserComponent,
//    FileUploadModule,
    UserloginComponent,
    UserregisterComponent,
    ProfileComponent,
    UserlogoutComponent,
    ProductListingComponent,
    ProductpageComponent,
    ContactComponent,
    PostproductComponent,
    TopbardarkLoaderComponent,
    RequirementComponent,
    CompareComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    Title,
    ProductService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
