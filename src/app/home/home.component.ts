import { TokenStorageService } from './../_services/token-storage.service';
import { Title } from '@angular/platform-browser';
import { GlobalConstants } from './../global-constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser: any;




  public constructor(
    private titleService: Title,
    private token: TokenStorageService,

  ){
  }





  ngOnInit(): void {
    this.titleService.setTitle('Housing Street');

    this.currentUser = this.token.getUser().username;

  }

}
