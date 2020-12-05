import { UserService } from './../_services/user.service';
import { TokenStorageService } from './../_services/token-storage.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  name: string[] = [] ;
  id: number;
  content: [] ;

  constructor(
    private titleService: Title,
    private tokenStorage: TokenStorageService,
    private userService: UserService,
  ) { }


  ngOnInit(): void {
    this.titleService.setTitle('Dashboard');
    this.name = this.tokenStorage.getUser().username;
    this.userService.getUserBoard().pipe().subscribe(
      (data: any) => {
        this.content = data;
        console.log(this.content['id']);
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );


  }

}
