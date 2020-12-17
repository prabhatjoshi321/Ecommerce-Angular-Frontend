import { AuthService } from './../_services/auth.service';
import { UserService } from './../_services/user.service';
import { TokenStorageService } from './../_services/token-storage.service';
import { Title } from '@angular/platform-browser';
import { GlobalConstants } from './../global-constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css']
})
export class RequirementComponent implements OnInit {

  content: [];
  form:string;
  ftpstring: string = GlobalConstants.ftpURL;
  user_id: string;

  constructor(
    private titleService: Title,
    private dataService: TokenStorageService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Requirements');
    this.userService.getrequirements().pipe().subscribe(
      (data: any) => {
        this.content =data.data.data;
        console.log(this.content)
      }
    );
    this.userService.getUserBoard().pipe().subscribe(
      (data: any) => {
        this.user_id = data.id;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

  }

  onSubmit(): void{
    this.authService.requirements(this.form, this.user_id).subscribe(
      data => {
        console.log(data)
      },
      err => {
        console.log(err.error.message);
      }
    );
  }

}
