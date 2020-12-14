import { UserService } from './../_services/user.service';
import { ProductService } from './../_services/product.service';
import { AuthService } from './../_services/auth.service';
import { Title } from '@angular/platform-browser';
import { GlobalConstants } from './../global-constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

  comp_display: boolean = true;
  prod_id: any ;
  content: [];
  user_data: [];
  product_data: [];
  ftpstring: string = GlobalConstants.ftpURL;

  constructor(
    private titleService: Title,
    private userService: UserService,
    private authService: AuthService,
    private prodservice: ProductService,
  ) { }

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
    this.prod_id = data;
    this.toggle();
    // this.router.navigate(["/productpage"])
  }

  toggle(){
    this.comp_display = !this.comp_display;

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

}
