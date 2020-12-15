import { TokenStorageService } from './../_services/token-storage.service';
import { Router } from '@angular/router';
import { ProductService } from './../_services/product.service';
import { GlobalConstants } from './../global-constants';
import { UserService } from './../_services/user.service';
import { DomSanitizer, SafeUrl, Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  content: [];
  ftpstring: string= GlobalConstants.ftpURL;


  constructor(
    private titleService: Title,
    private userService: UserService,
    private sanitizer: DomSanitizer,
    private myservice: ProductService,
    private idservice: TokenStorageService,
    private router: Router,
  ) {}

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}

  ngOnInit(): void {

    this.titleService.setTitle('Listing');
    this.userService.getproductlisting().pipe().subscribe(
      (data: any) => {

        this.content = data.data.data;
        //console.log(this.content);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

  prod_func(data){
    this.idservice.saveProdId(data);
    // this.myservice.setData(data);
    // this.router.navigate(["/productpage"])
  }

}
