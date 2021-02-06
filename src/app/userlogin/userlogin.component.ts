import { GlobalConstants } from './../global-constants';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TokenStorageService } from './../_services/token-storage.service';
import { AuthService } from './../_services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  form: any = {};
  ared: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  usertype: boolean = false;
  errorMessage = '';
  roles: string[] = [];
  productEntry:boolean = false;
  productEntrySale:boolean = false;
  productEntryRent:boolean = false;


  image1;
  image2;
  image3;
  image4;
  image5;

  furnish: boolean = false;

  maintenance: boolean = true;

  parking: boolean = false;

  amenityArray = [];
  varAmenity: string;

  furnishingArray = [];
  varfurnishing: string;

    text : string;

  constructor(
    private titleService: Title,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login');
    console.log(this.tokenStorage.getUser())
    if (this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().username;
      if (this.tokenStorage.getUser().usertype == 1){
        this.usertype = true;
      }
    }
    else{
      this.isLoggedIn = false ;
    }


  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.access_token);
        console.log(this.tokenStorage.getToken());
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().name;
        // this.router.navigate({"/productpage"})

        // this.router.navigate(["/profile"])
        // this.reloadPage();
        // window.location.href=GlobalConstants.siteURL+"";
        this.redirect_to_profile();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  redirect_to_profile(): void {
    window.location.href=GlobalConstants.siteURL+"profile"
  }

  logout(): void{
    this.isLoggedIn = false;
    this.tokenStorage.signout();
    window.location.reload();
  }

  onSubmitSale(): void{
    this.productEntry = true
    this.productEntryRent = false
    this.productEntrySale = true

    console.log(this.form)
    this.authService.product_insert_sale(this.form, this.tokenStorage.getUser().id, this.amenityArray, this.furnishingArray, this.image1, this.image2, this.image3, this.image4, this.image5).subscribe(
      data => {
        console.log("successful" + data)
      },
      err => {
        this.errorMessage = err.error.message;
        console.log(err);
      }
    );

  }

  onSubmitRent(): void{
    this.productEntry = true
    this.productEntryRent = true
    this.productEntrySale = false

    this.authService.product_insert_rent(this.form, this.image1, this.image2, this.image3, this.image4, this.image5).subscribe(
      data => {
        console.log("successful" + data)
      },
      err => {
        this.errorMessage = err.error.message;
      }
    );

  }


  //functions for controlling sale and rent listing functionality


  furnishStatus(event): void{
    console.log(event);
    if(event == 'SFR' || event == 'FFR')
    {
      this.furnish = true;
    }
    else
    {
      this.furnish = false;
    }
  }


  onChange(UpdatedValue : string) :void
  {
    this.text = UpdatedValue;
    this.amenityArray.push(UpdatedValue);
  }

  amenity(event): void{
    console.log(event)
    this.amenityArray.push(event);

      console.log(this.amenityArray);
  }

  furnishing(event): void{
    console.log(event)
    this.furnishingArray.push(event);

      console.log(this.furnishingArray);
  }





  insert_image1(event){

    this.readThis1(event.target)

  }
  readThis1(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image1 = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  insert_image2(event){

    this.readThis2(event.target)

  }
  readThis2(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image2 = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  insert_image3(event){

    this.readThis3(event.target)

  }
  readThis3(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image3 = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  insert_image4(event){

    this.readThis4(event.target)

  }
  readThis4(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image4 = myReader.result;
    }
    myReader.readAsDataURL(file);
  }

  insert_image5(event){

    this.readThis5(event.target)

  }
  readThis5(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.image5 = myReader.result;
    }
    myReader.readAsDataURL(file);
  }
z

  delete_pic1(){
    this.image1 = null;
  }
  delete_pic2(){
    this.image2 = null;
  }
  delete_pic3(){
    this.image3 = null;
  }
  delete_pic4(){
    this.image4 = null;
  }
  delete_pic5(){
    this.image5 = null;
  }


  maintenanceStatus(event): void {
    if (event == 0){
      this.maintenance = true;
    }
    else{
      this.maintenance = false
    }
  }

  parkingStatus(event): void {
    console.log(event)
    if (event == 0){
      this.parking = true;
    }
    else{
      this.parking = false
    }
  }















}
