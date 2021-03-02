import { GlobalConstants } from './../global-constants';
import { Title } from '@angular/platform-browser';
import { UserService } from './../_services/user.service';
import { AuthService } from './../_services/auth.service';
import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admingetusers',
  templateUrl: './admingetusers.component.html',
  styleUrls: ['./admingetusers.component.css']
})
export class AdmingetusersComponent implements OnInit {

  content_user
  content_owner
  content_dealer
  content_lawyer
  content_admin

  ftpURL = GlobalConstants.ftpURL

  constructor(
    private titleservice: Title,
    private userService: UserService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.titleservice.setTitle('All Properties')
    this.userService.getAdmin_users().pipe().subscribe(
      data => {
        this.content_user = data.data
        this.content_owner = data.data_owner
        this.content_dealer = data.data_dealer
        this.content_lawyer = data.data_lawyer
        this.content_admin = data.data_admin
        console.log(data)

      },
      err => {
        console.log(err)
      }
    )

  }

}
