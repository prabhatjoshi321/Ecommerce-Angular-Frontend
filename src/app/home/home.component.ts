import { Router } from '@angular/router';
import { AuthService } from './../_services/auth.service';
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
  form: any = {};
  data: any = {};



  public constructor(
    private titleService: Title,
    private dataService: TokenStorageService,
    private searchService: AuthService,
    private router: Router
  ){
  }





  ngOnInit(): void {
    this.titleService.setTitle('Housing Street');

    this.currentUser = this.dataService.getUser().username;

  }

  onSearch(): void{
    this.searchService.search(this.form).subscribe(
      data => {
        this.dataService.searchData(data);
      },
      err => {
        console.log(err.error.message);
      }
    );
    console.log(this.dataService.returnSearch().product.data);
    this.router.navigate(["/search"])

  }

}
