import { Title } from '@angular/platform-browser';
import { AuthService } from './../_services/auth.service';
import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postproduct',
  templateUrl: './postproduct.component.html',
  styleUrls: ['./postproduct.component.css']
})
export class PostproductComponent implements OnInit {


  form: any = {};
  ared: any = {};
  isLoggedIn = false;
  isFormSubmitted = false;
  errorMessage = '';
  roles: string[] = [];

  saleValue: boolean = false;
  rentValue: boolean = false;


  constructor(
    private titleService: Title,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login');
    if (this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().username;
    }
    else{
      this.isLoggedIn = false ;
    }

  }

  onSubmitSale(): void {
    this.authService.product_insert_sale(this.form).subscribe(
      data => {
        console.log("successful" + data)
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

  onSubmitRent(): void {
    this.authService.product_insert_rent(this.form).subscribe(
      data => {
        console.log("successful" + data)
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );
  }

  saleButton(): void{
    this.saleValue = true;
    this.rentValue = false;
  }

  rentButton(): void{
    this.saleValue = false;
    this.rentValue = true;
  }

  reloadPage(): void {
    window.location.reload();
  }


}
