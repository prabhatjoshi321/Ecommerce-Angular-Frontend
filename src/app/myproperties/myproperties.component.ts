import { GlobalConstants } from './../global-constants';
import { Title } from '@angular/platform-browser';
import { AuthService } from './../_services/auth.service';
import { TokenStorageService } from './../_services/token-storage.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myproperties',
  templateUrl: './myproperties.component.html',
  styleUrls: ['./myproperties.component.css']
})
export class MypropertiesComponent implements OnInit {

  content: [];
  ftpstring: string = GlobalConstants.ftpURL;
  usertype;

  constructor(
    private titleService: Title,
    private tokenStorage: TokenStorageService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('My Properties');
    this.usertype = this.tokenStorage.getUser().usertype;
    console.log(this.usertype)

  }

  prod_func(data){
    this.tokenStorage.saveProdId(data);
    // this.myservice.setData(data);
    // this.router.navigate(["/productpage"])
  }

}
