import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-topbar',
  templateUrl: './dashboard-topbar.component.html',
  styleUrls: ['./dashboard-topbar.component.css']
})
export class DashboardTopbarComponent implements OnInit {

  currentUser: any;
  usertype;

  constructor(
    private token: TokenStorageService,


    ) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser().username;
    this.usertype = this.token.getUser().usertype;
    console.log(this.usertype)
  }


}
