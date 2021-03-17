import { UserService } from './../_services/user.service';
import { GlobalConstants } from './../global-constants';
import { Title } from '@angular/platform-browser';
import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;
  email: any;
  usertype: any;
  usercat: any;
  profile_pic: any;
  email_verifyd: any;
  email_verify: boolean = false;
  id_created_at:any;
  phn_no
  company_name
  company_url
  address
  city
  other_mobile_number
  landline_number
  company_profile
  pan_number
  aadhar_number
  provided_service
  place_of_practice
  price_for_service
  law_firm_number
  practice_number
  content: {};
  ftpstring: string = GlobalConstants.ftpURL;

  constructor(
    private token: TokenStorageService,
    private titleService: Title,
    private userService: UserService,

    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Profile Page');
    this.userService.getUserBoard().pipe().subscribe(
      (data: any) => {
        this.content = data;
        this.currentUser = data.name;
        this.profile_pic = data.profile_pic
        this.email = data.email;
        this.usertype = data.usertype;
        this.phn_no = data.other_mobile_number;
        this.company_name = data.company_name
        this.company_url = data.company_url
        this.address = data.address
        this.city = data.city
        this.landline_number = data.landline_number
        this.company_profile = data.company_profile
        this.pan_number = data.pan_number
        this.aadhar_number = data.aadhar_number
        this.provided_service = data.provided_service
        this.place_of_practice = data.place_of_practice
        this.price_for_service = data.price_for_service
        this.law_firm_number = data.law_firm_number
        this.practice_number = data.practice_number
        if(this.usertype == 1){
          this.usercat = "Customer";
        }
        if(this.usertype == 2){
          this.usercat = "Owner";
        }
        if(this.usertype == 3){
          this.usercat = "Dealer/Company";
        }
        if(this.usertype == 4){
          this.usercat = "Lawyer";
        }
        this.email_verifyd = data.phone_number_verification_status;
        if(this.email_verifyd != 0){
          this.email_verify = true;
        }
        this.id_created_at = data.created_at;
        console.log(this.content);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    )
  }

}
