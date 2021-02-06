import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from './../_services/user.service';
import { TokenStorageService } from './../_services/token-storage.service';
import { AuthService } from './../_services/auth.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postproductrent',
  templateUrl: './postproductrent.component.html',
  styleUrls: ['./postproductrent.component.css']
})
export class PostproductrentComponent implements OnInit {

  form: any = {};
  ared: any = {};
  isLoggedIn = false;
  isFormSubmitted = false;
  errorMessage = '';
  roles: string[] = [];

  saleValue: boolean = true;
  rentValue: boolean = false;

  furnish: boolean = false;

  maintenance: boolean = true;

  parking: boolean = false;

  amenityArray = [];
  varAmenity: string;

  furnishingArray = [];
  varfurnishing: string;



  text : string;




  listing_rent = new FormGroup({

    user_id: new FormControl('') ,
    build_name: new FormControl('') ,
    type: new FormControl('') ,
    willing_to_rent_out_to: new FormControl('') ,
    agreement_type: new FormControl('') ,
    address: new FormControl('') ,
    display_address: new FormControl('') ,
    city: new FormControl('') ,
    locality: new FormControl('') ,
    property_detail: new FormControl('') ,
    nearest_landmark: new FormControl('') ,
    map_latitude: new FormControl('') ,
    map_longitude: new FormControl('') ,
    product_image1: new FormControl(''),
    product_image2: new FormControl(''),
    product_image3: new FormControl(''),
    product_image4: new FormControl(''),
    product_image5: new FormControl(''),
    nearby_places: new FormControl('') ,
    area: new FormControl('') ,
    area_unit: new FormControl('') ,
    carpet_area: new FormControl('') ,
    bedroom: new FormControl('') ,
    bathroom: new FormControl('') ,
    balconies: new FormControl('') ,
    additional_rooms: new FormControl('') ,
    furnishing_status: new FormControl('none') ,
    furnishings: new FormControl('') ,
    total_floors: new FormControl('') ,
    property_on_floor: new FormControl('') ,
    rera_registration_status: new FormControl('') ,
    additional_parking_status: new FormControl('') ,
    parking_covered_count: new FormControl('') ,
    parking_open_count: new FormControl('') ,
    rent_availability: new FormControl('') ,
    available_for: new FormControl('') ,
    buildyear: new FormControl('') ,
    age_of_property: new FormControl('') ,
    possession_by: new FormControl('') ,
    duration_of_rent_aggreement: new FormControl('') ,
    security_deposit: new FormControl('') ,
    maintenance_charge: new FormControl('') ,
    maintenance_charge_status: new FormControl('') ,
    maintenance_charge_condition: new FormControl('Monthly') ,
    ownership: new FormControl('') ,
    rent_cond: new FormControl('') ,
    expected_pricing: new FormControl('') ,
    inclusive_pricing_details: new FormControl('') ,
    tax_govt_charge: new FormControl('') ,
    price_negotiable: new FormControl('') ,
    deposit: new FormControl('') ,
    brokerage_charges: new FormControl('') ,
    amenities: new FormControl('') ,
    facing_towards: new FormControl('') ,
    availability_condition: new FormControl('') ,
    expected_rent: new FormControl('') ,
    inc_electricity_and_water_bill: new FormControl('') ,
    month_of_notice: new FormControl('') ,
    equipment: new FormControl('') ,
    features: new FormControl('') ,
    description: new FormControl('') ,

})
  content: any = {};

  image1;
  image2;
  image3;
  image4;
  image5;


  constructor(
    private titleService: Title,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private userService: UserService
    ) { }

    eventListen(event){
      console.log(event);
    }


  ngOnInit(): void {
    this.titleService.setTitle('Create Listing');
    console.log(this.form);
    this.content = this.tokenStorage.getUser().id;
    this.maintenance = true;
    this.parking = false;
    if (this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().username;
    }
    else{
      this.isLoggedIn = false ;
    }
  }


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

  onSubmitSale(): void {

    // this.listing_sale.patchValue({
    //   user_id: this.content.id,
    //   amenities: this.amenityArray,
    //   furnishings: this.furnishingArray,
    //   product_image1: this.image1,
    //   product_image2: this.image2,
    //   product_image3: this.image3,
    //   product_image4: this.image4,
    //   product_image5: this.image5,

    // })

    console.log(this.form)
    this.authService.product_insert_sale(this.form, this.content.id, this.amenityArray, this.furnishingArray, this.image1, this.image2, this.image3, this.image4, this.image5).subscribe(
      data => {
        console.log("successful" + data)
      },
      err => {
        this.errorMessage = err.error.message;
        console.log(err);
      }
    );
  }


  onSubmitRent(): void {
    this.authService.product_insert_rent(this.form, this.content.id, this.amenityArray, this.furnishingArray, this.image1, this.image2, this.image3, this.image4, this.image5).subscribe(
      data => {
        console.log("successful" + data)
      },
      err => {
        this.errorMessage = err.error.message;
        console.log(err)
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
