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
  phn_no: any;
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
        this.phn_no = data.phone_number;
        if(this.usertype = 1){
          this.usercat = "Seller";
        }
        if(this.usertype = 2){
          this.usercat = "Customer";
        }
        this.email_verifyd = data.email_verified_at;
        if(this.email_verifyd != null){
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
