import { AuthService } from './../_services/auth.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  theFile: any = null;
  fileToUpload: File = null;


  public constructor(
    private titleService: Title,
    private authService: AuthService) {

  }





  ngOnInit(): void {
    this.titleService.setTitle('Register');

  }

  onSubmit(): void {
    {this.authService.register(this.form).subscribe(

      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
          console.log(this.form);
          console.log(err);
        }
      );
    }
  }


}
