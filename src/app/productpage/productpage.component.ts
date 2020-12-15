import { Router, ActivatedRoute } from '@angular/router';
import { TokenStorageService } from './../_services/token-storage.service';
import { GlobalConstants } from './../global-constants';
import { ProductService } from './../_services/product.service';
import { AuthService } from './../_services/auth.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {

  prod_id: any ;
  user_data: [];
  product_data: [];
  ftpstring: string = GlobalConstants.ftpURL;
  sitestring: string = GlobalConstants.siteURL;


  constructor(
    private titleService: Title,
    private authService: AuthService,
    private idService: TokenStorageService,
    private prodservice: ProductService,
    private router: Router,
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.prodservice.setData(1);
    // this.prod_id = this.prodservice.getData();
    this.titleService.setTitle('Property Page');
    this.prod_id = this.idService.getProdId();
    console.log(this.router.url);
    {this.route.queryParams.subscribe(params => {
      let id = params['id'];
      console.log(id);
      if(id != null){
        this.prod_id = id;
      }
    })}
    {this.authService.product_see(this.prod_id).subscribe(

      data => {
        this.user_data = data["user_data"];
        this.product_data = data["product"];
        console.log(this.product_data);
        console.log(this.user_data);

      },
        err => {
          console.log(err);
        }
      );
    }
  }

  onShare(){
    alert("Your Shareable Link is \n" + this.sitestring + this.router.url + "?id=" + this.prod_id);
  }

}
