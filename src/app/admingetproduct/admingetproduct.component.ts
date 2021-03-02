import { TokenStorageService } from './../_services/token-storage.service';
import { AuthService } from './../_services/auth.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-admingetproduct',
  templateUrl: './admingetproduct.component.html',
  styleUrls: ['./admingetproduct.component.css']
})
export class AdmingetproductComponent implements OnInit {

  content

  constructor(
    private titleservice: Title,
    private userService: UserService,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.titleservice.setTitle('All Properties')
    this.userService.getAdmin_product().pipe().subscribe(
      data => {
        this.content = data.data
        console.log(data.data)

      },
      err => {
        console.log(err)
      }
    )

  }

}
